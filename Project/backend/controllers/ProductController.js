const Product = require("../models/ProductModel.js");
const User = require("../models/UserModel.js")
const mongoose = require('mongoose')
const getproducts =  async(req , res) => {
    const products = await Product.find();
    res.send(products)
}
const getcategories = async(req , res) => {
        const categories = await Product.find().distinct('category');
        res.send(categories)
    }

const getcat =  async(req , res) => {
      const product = await Product.find({category: req.params.category});
        res.send(product)
    }


const getproduct = async(req , res ) =>{
    const product = await Product.findOne({id: req.params.id});
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message : 'Product Not Found'})
    }
 
}
const getsearch =  async(req , res ) =>{
    const result = req.params.id
    const product = await Product.findOne({name:result});
   if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message : 'Product Not Found'})
    }
  
  }
const getid =  async(req , res ) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message : 'Product Not Found'})
    }
 
}

const getsearching = async(req , res) => {
  const results = await Product.find({name: req.query.q});
    res.json(results)
}
const getadmin = async (req, res) => {
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    res.send( { users ,  productCategories} );
    }

    const getreview = async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (product) {
          if (product.reviews.find((x) => x.name === req.user.name)) {
            return res
              .status(400)
              .send({ message: 'You already submitted a review' });
          }
    
          const review = {
            rating: Number(req.body.rating),
            name: req.body.name,
           comment: req.body.comment,
          };
          product.reviews.push(review);
          product.numReviews = product.reviews.length;
          product.rating =
            product.reviews.reduce((a, c) => c.rating + a, 0) /
            product.reviews.length;
          const updatedProduct = await product.save();
          res.status(201).send({
            message: 'Review Created',
            review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
            numReviews: product.numReviews,
            rating: product.rating,
          });
        } else {
          res.status(404).send({ message: 'Product Not Found' });
        }
      }
    
  
module.exports = {
    getproducts,
    getcategories,
    getcat,
    getproduct,
    getsearch,
    getid,
    getsearching,
    getadmin,
    getreview
}