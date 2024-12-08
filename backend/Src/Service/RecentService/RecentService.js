const RecentService = async (Request, DataModel) => {
    try {
        let Data = await DataModel.aggregate([
            { $sort: { CreateDate: -1 } }, 
            { $limit: 10 }
        ]);

        return { status: "Success", Data: Data };

    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
};

module.exports = RecentService;
