const UserVerifyOTPService = async (Request, DataModel) => {
    try {
        const email = Request.params.email;
        const OTPCode = Request.params.otp;

        // Check if OTP exists with the correct email and status
        const OTPCount = await DataModel.aggregate([
            { $match: { email: email, otp: OTPCode } },
            { $project: { status: 1 } }
        ]);

        // Check if OTP exists and retrieve the status
        const OtpStatus = OTPCount.length > 0 ? OTPCount[0].status : null;

        // Verify if OTP has not been used (status === 0)
        if (OtpStatus === 0) {
            // Update OTP status to 1 (used)
            const OTPUpdate = await DataModel.updateOne(
                { email: email, otp: OTPCode },
                { $set: { status: 1 } }
            );

            return {OtpStatus:OtpStatus, status: "success", data: OTPUpdate, aggregate: OTPCount };
        } 
        // OTP either doesn't exist or has already been used
        else if (OtpStatus === 1) {
            return { status: "fail", data: "OTP Code already used" };
        } else {
            return { status: "fail", data: "Invalid OTP Code" };
        }
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
};

module.exports = UserVerifyOTPService;
