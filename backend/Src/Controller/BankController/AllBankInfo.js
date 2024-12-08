const mongoose = require("mongoose");

const AllBankInfo = async (Request, DataModel) => {
    try {
        // Fetch all bank data
        const data = await DataModel.find({});

        // Calculate totals
        const AllBank = data.length;

        // Filter data for Pending and Active banks
        const PendingBank = data.filter(bank => bank.StatusBank === "Pending").length;
        const ActiveBank = data.filter(bank => bank.StatusBank === "Active").length;

        
        return { status: "Success", AllBank, PendingBank, ActiveBank };


    } catch (error) {
        console.error("Error in find bank:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = AllBankInfo;
