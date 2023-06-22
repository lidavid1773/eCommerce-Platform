import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send("Auth user + token");
});

// @route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user + clear cookie");
});

// @route GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @route PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// @route DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @route GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user by id");
});

// @route PUT /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
};
