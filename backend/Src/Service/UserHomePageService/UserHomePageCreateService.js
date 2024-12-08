const UserHomePageCreateService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;
        let ExistUserEmail = Request.body.CreatedUserEmail;

        let ExistData = await DataModel.aggregate([
            { $match: { CreatedUserEmail: ExistUserEmail } }
        ]);

        if (ExistData.length > 0) {
            return { status: "ExistData", data: ExistData };
        } else {
            let data = await DataModel.create(PostBody);
            return { status: "success", data: data };
        }
    } catch (error) {
        return { status: "fail", data: error.message }; 
    }
};

module.exports = UserHomePageCreateService;
