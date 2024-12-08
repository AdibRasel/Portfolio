const Mongoose = require("mongoose");

const IDWithDetailsServiceGetRequest = async (Request, DataModel) => {
    try {
        // const { ID } = Request.body;
        const { id } = Request.params;
        const ID = id;

        if (!ID) {
            throw new Error("ID is required in the request body");
        }


        const ObjectId = Mongoose.Types.ObjectId;

        const data = await DataModel.aggregate([
            {
                $match: {
                    _id: new ObjectId(ID)
                }
            }
        ]);

        return { status: "Success", data };
        
    } catch (error) {
        console.error("Error in IDWithDetailsService:", error);
        return { status: "fail", error: error.message };
    }
}

module.exports = IDWithDetailsServiceGetRequest;
