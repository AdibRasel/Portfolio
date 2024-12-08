const HomePageInfoModel = require("../../Model/HomePageInfoModel/HomePageInfoModel");
const AllDetailsService = require("../../Service/Common/AllDetailsService");
const IDWithUpdateService = require("../../Service/Common/IDWithUpdateService");
const UserSeeUserInfoService = require("../../Service/Common/UserSeeUserInfoService");
const CreateService = require("../../Service/CreateService/CreateService");
const UserHomePageCreateService = require("../../Service/UserHomePageService/UserHomePageCreateService");


//Super Admin Home Page info Create
exports.HomePageInfoCreate= async (req, res) => {
    let Result = await CreateService(req, HomePageInfoModel);
    res.status(200).json(Result);
};

//User Home Page Info Create
exports.UserHomePageInfoCreate= async (req, res) => {
    let Result = await UserHomePageCreateService(req, HomePageInfoModel);
    res.status(200).json(Result);
};


exports.HomePageInfoSeeAllDetails = async (req, res) => {
    let Result = await AllDetailsService(req, HomePageInfoModel);
    res.status(200).json(Result);
};

// User See User All Info See Home Page
exports.UserSeeUserHomePageInfo = async (req, res) => {
    let Result = await UserSeeUserInfoService(req, HomePageInfoModel);
    res.status(200).json(Result);
};

exports.HomePageInfoUpdate= async (req, res) => {
    let Result = await IDWithUpdateService(req, HomePageInfoModel);
    res.status(200).json(Result);
};
