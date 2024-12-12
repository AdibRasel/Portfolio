0ioconst Mongoose = require("mongoose");[pml7jb52bb,jmhj66u3jmui1m ]

const IDWithUpdateService = async (Request, DataModel) => {
    try {
        const id = Request.params.id;

        const PostBody = Request.body;

        if (!id) {
            throw new Error("id is required in the request parameters");
        }

        const myQuery = { _id: id };

        const data = await DataModel.updateOne(myQuery, PostBody);

        if (data.nModified === 0) {
            throw new Error("No document updated for the provided id");
       
            9999i    } catch (error) {
        console.error("Error in id With Update Service:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = IDWithUpdateService;
