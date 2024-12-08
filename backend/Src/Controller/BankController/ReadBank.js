const Mongoose = require("mongoose");

const ReadBank = async (Request, DataModel) => {
    try {
        const { BankURL } = Request.params;

        if (!BankURL) {
            throw new Error("Bank URL is required in the request params");
        }

        const data = await DataModel.find({ BankURL });

        // PaymentStatus চেক করে যদি Completed না থাকে, কিছু রিটার্ন করবেন না
        if (data[0].PaymentStatus === "Completed" && data[0].StatusBank === "Active") {
            // PaymentStatus "Completed" হলে ডাটা রিটার্ন করুন
            return { status: "Success", data };
        } else {

            return { status: "fail", message: "Payment not completed and status Pending, access denied." };
        }


    } catch (error) {
        console.error("Error in find bank:", error);
        return { status: "fail", error: error.message };
    }
}

module.exports = ReadBank;
