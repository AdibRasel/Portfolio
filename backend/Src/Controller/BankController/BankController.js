
const BankModel = require("../../Model/BankModel/BankModel");
const IDWithDeleteService = require("../../Service/Common/IDWithDeleteService");
const IDWithDetailsServiceGetRequest = require("../../Service/Common/IDWithDetailsServiceGetRequest");
const IDWithUpdateService = require("../../Service/Common/IDWithUpdateService");
const ActiveMailService = require("./ActiveMailService");
const ActivePaginationBankList = require("./ActivePaginationBankList");
const AllBankInfo = require("./AllBankInfo");
const BankRegistrationCreateService = require("./BankRegistrationCreateService");
const BankUpdateService = require("./BankUpdateService");
const DeleteBank = require("./DeleteBank");
const PendingPaginationBankList = require("./PendingPaginationBankList");
const ReadBank = require("./ReadBank");
const ReadWithURL = require("./ReadWithURL");
const RegistrationMailController = require("./RegistrationMailController");


// Bank Registration
exports.BankRegistration = async (req, res) => {
    let Result = await BankRegistrationCreateService(req, BankModel);
    res.status(200).json(Result);
};

// Registration Bank Mail Send
exports.BankMailSend = async (req, res) => {
    let Result = await RegistrationMailController(req, res);
    res.status(200).json(Result);
};

// Active Bank Mail Send
exports.ActiveMailSend = async (req, res) => {
    let Result = await ActiveMailService(req, res);
    res.status(200).json(Result);
};

// Pending Bank List
exports.PendingBankListPagination = async (req, res) => {
    try {
        let Result = await PendingPaginationBankList(req, BankModel);
        res.status(200).json(Result);
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }

};

// Active Bank List
exports.ActiveBankListPagination = async (req, res) => {
    try {
        let Result = await ActivePaginationBankList(req, BankModel);
        res.status(200).json(Result);
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};


// Active Bank List
exports.UpdateBank = async (req, res) => {
    let Result = await BankUpdateService(req, BankModel);
    res.status(200).json(Result);
};

// Read With URL
exports.ReadWithURL = async (req, res) => {
    // let Result = await IDWithDetailsService(req, CategoryModel);
    let Result = await ReadWithURL(req, BankModel);
    res.status(200).json(Result);
};



// Read Bank
exports.ReadBank = async (req, res) => {
    let Result = await ReadBank(req, BankModel);
    res.status(200).json(Result);
};



// Delete Bank
exports.BankDelete= async (req, res) => {
    let Result = await DeleteBank(req, BankModel);
    res.status(200).json(Result);
};


// All Bank Info
exports.AllBankInfo= async (req, res) => {
    let Result = await AllBankInfo(req, BankModel);
    res.status(200).json(Result);
};