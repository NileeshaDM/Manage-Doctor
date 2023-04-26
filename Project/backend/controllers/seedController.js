const Product = require("../models/ProductModel.js");
const User = require("../models/UserModel.js")
const mongoose = require('mongoose')
const data =require( "../data.js")
const  setproducts = async(req , res) => {
    await Product.remove({});
    const createProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createProducts ,createdUsers })

}
module.exports = {
    setproducts
  }