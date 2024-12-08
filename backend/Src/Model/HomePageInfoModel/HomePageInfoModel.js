const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    SuperAdminCreate:{type:String},
    CreatedUserEmail:{type:String},
    CreatedUserID:{type:mongoose.Schema.Types.ObjectId},
    AuthorName:{type:String},
    Title:{type:String},
    Logo:{type:String},
    LogoInfoImage:{type:String},
    SliderOne:{type:String},
    SliderTwo:{type:String},
    SliderThree:{type:String},
    FacebookURL:{type:String},
    GithubURL:{type:String},
    LinkdinURL:{type:String},
    GmailAddressOne:{type:String},
    GmailAddressTwo:{type:String},
    PhoneNumberOne:{type:String},
    PhoneNumberTwo:{type:String},
    FooterText:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const HomePageInfoModel = mongoose.model("Home_Page_Info_Model", DataSchema);
module.exports= HomePageInfoModel