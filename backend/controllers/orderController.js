import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @route POST /api/orders
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @route GET /api/orders/myorders
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @route GET /api/orders/:id
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @route GET /api/orders/:id/pay
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// @route GET /api/orders/:id/deliver
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// @route GET /api/orders
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
};
