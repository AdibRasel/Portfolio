const OTPModel = require("../../Model/OTPModel/OTPModel");

const UserResetPassService = async (Request, DataModel) => {
    const email = Request.body['email'];
    const OTPCode = Request.body["OTP"];
    const NewPass = Request.body["password"];

    try {
        // Step 1: Check if the OTP exists and retrieve its status
        // খুজে দেখবে সব ঠিক আছে কি না
        const OTPUsedCount = await OTPModel.findOne(
            { email: email, otp: OTPCode },
            { status: 1 }
        );


        if (OTPUsedCount) {

            // status কোড জাচাই করবে, 
            // Step 2: Check if OTP has already been used (status === 1 indicates unused)
            if (OTPUsedCount.status === 1) {



                
                // If OTP is valid and unused, attempt to update the user's password
                const PassUpdate = await DataModel.updateOne(
                    { Email: email }, // Ensure "email" field matches your schema
                    { $set: { Password: NewPass } } // Ensure "password" field matches your schema
                );

                
                if (PassUpdate.acknowledged && PassUpdate.modifiedCount > 0) {

                    // Update OTP status to indicate it has been used
                    const OtpStatusUpdate = await OTPModel.updateOne(
                        { email: email, otp: OTPCode }, // Query to find the correct OTP record
                        { $set: { status: 0 } } // Set status to 0 or any other value indicating used
                    );

                    return {
                        status: "success",
                        message: "Password updated successfully",
                        data: PassUpdate
                    };




                } else {
                    return { status: "fail", message: "This Password is your Old Password" };
                }





            } else {
                return { status: "fail", message: "OTP has already been used" };
            }





        } else {
            return { status: "fail", message: "Invalid OTP or email" };
        }




    } catch (error) {
        console.error('Error:', error); // Log the error for debugging
        return { status: "fail", message: "An error occurred", error: error.toString() };
    }
};

module.exports = UserResetPassService;
