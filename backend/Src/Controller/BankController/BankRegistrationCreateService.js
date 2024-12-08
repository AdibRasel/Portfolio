const BankRegistrationCreateService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        // Check for duplicate BankURL
        let existingBank = await DataModel.findOne({ BankURL: PostBody.BankURL });
        if (existingBank) {
            return { 
                status: "fail", 
                message: `BankURL "${PostBody.BankURL}" is already registered.`, 
                existingBank: PostBody.BankURL 
            };
        }

        // Create new bank entry
        let data = await DataModel.create(PostBody);
        return { status: "success", data: data };
    } catch (error) {
        
        if (error.code === 11000) {
            const duplicateKey = Object.keys(error.keyValue)[0];
            return { 
                status: "fail", 
                message: `Duplicate key error: ${duplicateKey} "${error.keyValue[duplicateKey]}" already exists.`,
                error: error, 
                existingBank: PostBody.BankURL 
            };
        }
        return { status: "fail", data: error.message || error };
    }
};

module.exports = BankRegistrationCreateService;
