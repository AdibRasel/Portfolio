const Mongoose = require("mongoose");

const ReadWithURL = async (Request, DataModel) => {
    try {
        // const { BankURL } = Request.body;
        // const { BankURL } = Request.params.URL;
        const BANKURL = Request.params.URL;


        if (!BANKURL) {
            throw new Error("Bank URL is required in the request params");
        }

        const data = await DataModel.aggregate([
            {
                $match: {
                    BankURL: BANKURL
                }
            }
        ]);

        return { status: "Success", data };
        
    } catch (error) {
        console.error("Error in Read With URL:", error);
        return { status: "fail", error: error.message };
    }
}

module.exports = ReadWithURL;
