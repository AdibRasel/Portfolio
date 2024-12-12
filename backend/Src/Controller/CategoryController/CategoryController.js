const CategoryModel = require("../../Model/CategoryModel/CategoryModel");
const PostModel = require("../../Model/PostModel/PostModel");
const CategoryFullDetailsWithAllPost = require("../../Service/Common/CategoryFullDetailsWithAllPost");
const IDWithDeleteService = require("../../Service/Common/IDWithDeleteService");
const IDWithDetailsService = require("../../Service/Common/IDWithDetailsService");
const IDWithUpdateService = require("../../Service/Common/IDWithUpdateService");
const UserAllCategoryDetailsService = require("../../Service/Common/UserAllCategoryDetailsService");
const CreateService = require("../../Service/CreateService/CreateService");

// Create Category Service
exports.CreateCategory = async (req, res) => {
    try {
        const result = await CreateService(req, CategoryModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find User All Category Details
exports.UserAllCategoryDetails = async (req, res) => {
    try {
        const result = await UserAllCategoryDetailsService(req, CategoryModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Category Full Details
exports.CategoryFullDetails = async (req, res) => {
    try {
        const result = await IDWithDetailsService(req, CategoryModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Category Full Details With All Post
exports.CategoryFullDetailsWithAllPost = async (req, res) => {
    try {
        const result = await CategoryFullDetailsWithAllPost(req, CategoryModel, PostModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Category Delete
exports.CategoryDelete = async (req, res) => {
    try {
        const result = await IDWithDeleteService(req, CategoryModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Category Update
exports.CategoryUpdate = async (req, res) => {
    try {
        const result = await IDWithUpdateService(req, CategoryModel);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
