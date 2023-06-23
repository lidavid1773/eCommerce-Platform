import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  // Set JWT as a HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  });
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

// *Admin functionality*
// @route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// *Admin functionality*
// @route DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// *Admin functionality*
// @route GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user by id");
});

// *Admin functionality*
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
