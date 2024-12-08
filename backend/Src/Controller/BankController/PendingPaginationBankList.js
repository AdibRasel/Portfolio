const PendingPaginationBankList = async (Request, DataModel) => {
    try {
        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);
        let searchValue = Request.params.searchKeyword;

        let skipRow = (pageNo - 1) * perPage;

        // Initialize an empty match condition array
        let matchConditions = [];

        // Always match for StatusBank: "Pending"
        matchConditions.push({ StatusBank: "Pending" });

        // If searchValue is provided and not empty, apply regex for BankName
        if (searchValue && searchValue.trim() !== "i") {
            let SearchRgx = { "$regex": searchValue, "$options": "i" };
            matchConditions.push({ BankName: SearchRgx });
        }

        // Aggregate query
        let data = await DataModel.aggregate([
            // Match conditionally based on the presence of searchValue
            { $match: { $and: matchConditions } },

            // Sort by CreateDate in descending order
            { $sort: { CreateDate: -1 } },

            // Paginate and count results
            {
                $facet: {
                    Total: [{ $count: "count" }],
                    Rows: [{ $skip: skipRow }, { $limit: perPage }]
                }
            }
        ]);

        // Return the result
        return { status: "Success", data: data };
    } catch (error) {
        return { status: "Failed", data: error.toString() };
    }
};

module.exports = PendingPaginationBankList;
