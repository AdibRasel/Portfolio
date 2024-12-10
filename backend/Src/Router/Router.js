const express =require('express');
const { MailSendController } = require('../Controller/MailSendController/MailSendController');
const { EmailValidator } = require('../Controller/EmailValidator/EmailValidator');
const  EmailController  = require('../Controller/EmailController/EmailController');
const UserController = require("../Controller/UserController/UserController");
const { LoginVerifyController } = require('../Controller/LoginVerifyController/LoginVerifyController');

const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware');

const CategoryController = require ("../Controller/CategoryController/CategoryController")
const PostController = require ("../Controller/PostController/PostController");
const PublicALLinfoController = require('../Controller/PublicALLinfoController/PublicALLinfoController');


const HomePageInfoController = require ("../Controller/HomePageInfoController/HomePageInfoController");


const BankController = require ("../Controller/BankController/BankController")




const Router =express.Router();


// Email Send ইমেইল সেন্ড
Router.post("/MailSend", MailSendController);
Router.post("/EmailValidator", EmailValidator);

// Email Send whith create email info / ইমেইল পাঠানোর পর সেই ইমেল টি সেভ হবে।
Router.post("/CreateEmail", EmailController.CreateEmailController);




// =============== User =================
// User Registration API // ইউজার রেজিষ্ট্রিশন
Router.post("/UserRegistration", UserController.UserRegistration);

// Per Relode Login Chack, Login success then see frontend dashboard desing, login faild see frond end public design // লগিন সফল হলে ইউজার ডেসবোর্ড দেখাবে, লগিন ফেইল্ড হলে পাভলিক ডেসবোর্ড দেখাবে। 
Router.post("/LoginVerify", LoginVerifyController);

// User Login API // ইউজার লগিন
Router.post("/UserLogin", UserController.UserLogin);


// User Details API // ইউজারের সকল তথ্য
Router.post("/UserDetails", AuthVerifyMiddleware, UserController.UserDetails);





// User Create Category API // ক্যাটেগরি তৈরি
Router.post("/CreateCategory", AuthVerifyMiddleware, CategoryController.CreateCategory);
// Category Details API // একজন ইউজারের সকল ক্যটেগরি
Router.post("/UserAllCategoryDetails", AuthVerifyMiddleware, CategoryController.UserAllCategoryDetails);
// Category Full Details API // একটি ক্যটেগরির সকল তথ্য
Router.post("/CategoryFullDetails", AuthVerifyMiddleware, CategoryController.CategoryFullDetails);
// Category Full Details With All Post API // একটি ক্যটেগরির সকল তথ্য শো করবে এবং সেই ক্যটেগরির সকল পোস্ট শো করবে।
Router.post("/CategoryFullDetailsWithAllPost", AuthVerifyMiddleware, CategoryController.CategoryFullDetailsWithAllPost);
// Category Delete
Router.post("/CategoryDelete", AuthVerifyMiddleware, CategoryController.CategoryDelete);
// Category Update
Router.post("/CategoryUpdate/:id", AuthVerifyMiddleware, CategoryController.CategoryUpdate);



// User Create Post API // পোস্ট তৈরি
Router.post("/CreatePost", AuthVerifyMiddleware, PostController.CreatePost);
// Post Details API // একজন ইউজারের সকল পোস্ট
Router.post("/UserAllPostDetails", AuthVerifyMiddleware, PostController.UserAllPostDetails);
// Post Full Details API // একটি পোস্ট সকল তথ্য
Router.post("/PostFullDetails", AuthVerifyMiddleware, PostController.PostFullDetails);
// Post Delete
Router.post("/PostDelete", AuthVerifyMiddleware, PostController.PostDelete);
// Post Update
Router.post("/PostUpdate/:id", AuthVerifyMiddleware, PostController.PostUpdate);











//=========== Super Admin
// Home Page Info Details Create Setting
Router.post("/HomePageInfoCreate", AuthVerifyMiddleware, HomePageInfoController.HomePageInfoCreate);
// Home Page Info See All Details
Router.get("/HomePageInfoSeeAllDetails", HomePageInfoController.HomePageInfoSeeAllDetails);
// Home Page Info Update
Router.post("/HomePageInfoUpdate/:id",AuthVerifyMiddleware, HomePageInfoController.HomePageInfoUpdate);






//============ User
// User See User Home Page Info
Router.post("/UserSeeUserHomePageInfo",AuthVerifyMiddleware, HomePageInfoController.UserSeeUserHomePageInfo);
// Home Page Info See All Details
Router.get("/HomePageInfoSeeAllDetails", HomePageInfoController.HomePageInfoSeeAllDetails);
//User Home Page User Create
Router.post("/UserHomePageInfoCreate", HomePageInfoController.UserHomePageInfoCreate);




// Public Router start
// Public All info 
Router.get("/Allinfo", PublicALLinfoController.PublicAllinfo);

// Recent Ten (10) Category
Router.get("/RecentTenCategory", PublicALLinfoController.RecentTenCategory);
// Category Pagination with searchKeyword
Router.get("/CategoryPagination/:pageNo/:perPage/:searchKeyword",  PublicALLinfoController.CategoryPagination);
// Category ID With Details
Router.get("/CategoryIDWithDetails/:id",  PublicALLinfoController.CategoryIDWithDetails); // post man a add korte hobe
Router.get("/CategoryUnderAllPost/:id",  PublicALLinfoController.CategoryUnderAllPost); // post man a add korte hobe


// Recent Ten (10) Post
Router.get("/RecentTenPost", PublicALLinfoController.RecentTenPost);
// post Pagination with searchKeyword
Router.get("/PostPagination/:pageNo/:perPage/:searchKeyword",  PublicALLinfoController.PostPagination);
// Post ID With Details
Router.get("/PostIDWithDetails/:id",  PublicALLinfoController.PostIDWithDetails); // post man a add korte hobe
Router.get("/PostUnderCategoryDetails/:id",  PublicALLinfoController.PostUnderCategoryDetails); // post man a add korte hobe












// Recover Verify Email setp 1 প্রথমে ইমেইল যাচাই করবে আছে কি না, থাকলে ইমেলে একটি ৬ ডিজিটের কোড পাঠাবে।
// otp মডেলে status কোড 0 করবে। 
Router.get("/RecoverVerifyEmail/:email" , UserController.RecoverVerifyEmail)

// Recover Verify OTP setp 2। otp মডেলে গিয়ে ইমেল আর otp যাচাই করবে। 
// otp মডেলে status কোড 1 করবে। 
Router.get("/RecoverVerifyOTP/:email/:otp", UserController.RecoverVerifyOTP);

// Recover Verify OTP & Change Password setp 3
// otp মডেলে গিয়ে খুজবে ইমেল আর otp কোড, সাথে status code 1 আছে কি না, 
// ঠিক থাকলে পাসওয়ার্ড চ্যঞ্জ করবে সাথে otp মডেলে status কোড আবার 0 করে দিবে। 
Router.post("/RecoverResetPass", UserController.RecoverResetPass);












// ================== Bank Project Start ==================
// Bank Registration
Router.post("/BankRegistration", BankController.BankRegistration);

// Registration Mail Send
Router.post("/BankMailSend",  BankController.BankMailSend);

// Active Mail Send
Router.post("/ActiveMailSend",  BankController.ActiveMailSend);

// Pending Bank List
Router.get("/PendingBankList/:pageNo/:perPage/:searchKeyword",  BankController.PendingBankListPagination);

// Active Bank List
Router.get("/ActiveBankList/:pageNo/:perPage/:searchKeyword",  BankController.ActiveBankListPagination);

// Update Bank API // super admin api
Router.post("/UpdateBank/:URL", AuthVerifyMiddleware, BankController.UpdateBank);

// Delete Bank // super admin api
Router.get("/DeleteBank/:BankURL",AuthVerifyMiddleware, BankController.BankDelete);


// All Bank Info // super admin api
Router.get("/AllBankInfo", BankController.AllBankInfo);


// Read With URL Bank API 
Router.get("/ReadWithURL/:URL",  BankController.ReadWithURL);

// Read Bank // public api
Router.get("/ReadBank/:BankURL", BankController.ReadBank);



// রেজিট্রিশন করলে এ প্রথম এক মাস ফ্রি সার্ভিস- লজিক ওকে ফ্রন্টইন্ড ব্যকইন্ড






// ================== Bank Project End ==================










module.exports=Router