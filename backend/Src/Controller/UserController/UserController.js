const CreateService = require("../../Service/CreateService/CreateService");
const UserRegistrationModel = require("../../Model/UserModel/UserRegistrationModel");
const UserRegistrationService = require("../../Service/UserRegistrationService/UserRegistrationService");
const UserLoginService = require("../../Service/UserLoginService/UserLoginService");
const UserDetailsService = require("../../Service/UserDetailsService/UserDetailsService");
const OTPModel = require("../../Model/OTPModel/OTPModel");
const SendEmailUtilityForgotPassword = require("../../Utility/SendEmailUtilityForgotPassword/SendEmailUtilityForgotPassword");
const UserVerifyEmailService = require("../../Service/ForgotPassword/UserVerifyEmailService");
const UserVerifyOTPService = require("../../Service/ForgotPassword/UserVerifyOTPService");
const UserResetPassService = require("../../Service/ForgotPassword/UserResetPassService");





// User Registration Service
exports.UserRegistration = async (req, res) => {
    let Result = await UserRegistrationService(req, UserRegistrationModel);
    res.status(200).json(Result);
};


// User Login Service
exports.UserLogin = async (req, res) => {
    let Result = await UserLoginService(req, UserRegistrationModel);
    res.status(200).json(Result);
};


// User Details Service
exports.UserDetails = async (req, res) => {
    let Result = await UserDetailsService(req, UserRegistrationModel);
    res.status(200).json(Result);
};



// Recover Verify Email setp 1 প্রথমে ইমেইল যাচাই করবে আছে কি না, থাকলে ইমেলে একটি ৬ ডিজিটের কোড পাঠাবে।
// otp মডেলে status কোড 0 করবে। 
exports.RecoverVerifyEmail = async (Req, Res) => {
    let Result = await UserVerifyEmailService(Req, UserRegistrationModel)
    Res.status(200).json(Result)
};


// Recover Verify OTP setp 2। otp মডেলে গিয়ে ইমেল আর otp যাচাই করবে। 
// otp মডেলে status কোড 1 করবে। 
exports.RecoverVerifyOTP = async (req, res)=>{
    let Result = await UserVerifyOTPService(req, OTPModel)
    res.status(200).json(Result)
}

// Recover Verify OTP & Change Password setp 3
// otp মডেলে গিয়ে খুজবে ইমেল আর otp কোড ঠিক আছে কি না, 
// ঠিক থাকলে পাসওয়ার্ড চ্যঞ্জ করবে সাথে otp মডেলে status কোড আবার 0 করে দিবে।
exports.RecoverResetPass = async (req, res)=>{
    let Result = await UserResetPassService(req, UserRegistrationModel)
    res.status(200).json(Result)
}
