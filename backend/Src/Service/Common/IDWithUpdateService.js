const Mongoose = require("mongoose");

const IDWithUpdateService = async (Request, DataModel) => {
    try {
        const URL = Request.params.URL;

        const PostBody = Request.body;

        if (!URL) {
            throw new Error("URL is required in the request parameters");
        }

        const myQuery = { BankURL: URL };

        const data = await DataModel.updateOne(myQuery, PostBody);

        if (data.nModified === 0) {
            throw new Error("No document updated for the provided URL");
        } else {
            console.log(data);
            return { status: "Update Success", data:data };
        }
    } catch (error) {
        console.error("Error in URL With Update Service:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = IDWithUpdateService;
