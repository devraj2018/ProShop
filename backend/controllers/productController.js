import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//  @desc Fetch All Products
//  @route Get /api/products
//  @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//  @desc Fetch Single Products
//  @route Get /api/products/:id
//  @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductById, getProducts };
