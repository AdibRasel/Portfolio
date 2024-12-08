const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const PostModel = require("../../Model/PostModel/PostModel");
const AllinfoService = require("../../Service/AllinfoService/AllinfoService");
const PaginationSearch = require("../../Service/AllinfoService/PaginationSearch");
const CategoryUnderAllPostService = require("../../Service/Common/CategoryUnderAllPostService");
const IDWithDetailsService = require("../../Service/Common/IDWithDetailsService");
const IDWithDetailsServiceGetRequest = require("../../Service/Common/IDWithDetailsServiceGetRequest");
const PostUnderCategoryDetailsService = require("../../Service/Common/PostUnderCategoryDetailsService");
const RecentService = require("../../Service/RecentService/RecentService");






// Public All info
exports.PublicAllinfo = async (req, res) => {
    let Result = await AllinfoService(req, CategoryModel, PostModel);
    res.status(200).json(Result);
};



// Recent Ten (10) Category
exports.RecentTenCategory = async (req, res) => {
    let Result = await RecentService(req, CategoryModel);
    res.status(200).json(Result);
};
//Category Pagination with searchKeyword
exports.CategoryPagination = async (req, res) => {
    let SearchRgx = { "$regex": req.params.searchKeyword, "$options": "i" }
    let SearchArray = [{ CategoryTitle: SearchRgx }] // CategoryTitle হচ্ছে ডাটা মডের কি(key) এর নাম। 
    let Result = await PaginationSearch(req, CategoryModel, SearchArray)
    res.status(200).json(Result)
};
// Category ID With Details
exports.CategoryIDWithDetails = async (req, res) => {
    // let Result = await IDWithDetailsService(req, CategoryModel);
    let Result = await IDWithDetailsServiceGetRequest(req, CategoryModel);
    res.status(200).json(Result);
};
// Category ID With Details
exports.CategoryUnderAllPost = async (req, res) => {
    // let Result = await IDWithDetailsService(req, CategoryModel);
    let Result = await CategoryUnderAllPostService(req, PostModel);
    res.status(200).json(Result);
};




// Recent Ten (10) Post
exports.RecentTenPost = async (req, res) => {
    let Result = await RecentService(req, PostModel);
    res.status(200).json(Result);
};
//Post Pagination with searchKeyword
exports.PostPagination = async (req, res) => {
    let SearchRgx = { "$regex": req.params.searchKeyword, "$options": "i" }
    let SearchArray = [{ PostTitle: SearchRgx }] // PostTitle হচ্ছে ডাটা মডের কি(key) এর নাম। 
    let Result = await PaginationSearch(req, PostModel, SearchArray)
    res.status(200).json(Result)
};
// Post ID With Details
exports.PostIDWithDetails = async (req, res) => {
    // let Result = await IDWithDetailsService(req, PostModel);
    let Result = await IDWithDetailsServiceGetRequest(req, PostModel);
    res.status(200).json(Result);
};
// Post Under Category Details
exports.PostUnderCategoryDetails = async (req, res) => {
    // let Result = await IDWithDetailsService(req, CategoryModel);
    let Result = await PostUnderCategoryDetailsService(req, CategoryModel);
    res.status(200).json(Result);
};