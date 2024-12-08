const Mongoose = require("mongoose");

const DeleteBank = async (Request, DataModel) => {
    try {
        // Access URL from request.params instead of request.body
        const { BankURL } = Request.params;


        if (!BankURL) {
            throw new Error("URL is required in the request parameters");
        }

        const DeleteItem = { BankURL: BankURL };

        const data = await DataModel.deleteOne(DeleteItem);

        console.log(data);

        if (data.deletedCount === 0) {
            throw new Error("No document deleted for the provided URL");
        } else {
            return { status: "Delete Success", data };
        }
    } catch (error) {
        console.error("Error in URL With Delete Service:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = DeleteBank;
