const express = require('express')




const {
    getproducts,
    getcategories,
    getcat,
    getproduct,
    getsearch,
    getid,
    getsearching,
    getadmin,
    getreview,

} = require ("../../controllers/ProductController")




const productRouter = express.Router();

productRouter.get('/', getproducts)
   
productRouter.get( '/categories' , getcategories)

productRouter.get( '/Category/:category' ,getcat)


productRouter.get('/id/:id' , getproduct)


productRouter.get('/search/:id' ,getsearch) 


productRouter.get('/:id' , getid)

 productRouter.get('/searching' , getsearching)
 productRouter.get('/cat/product-summary',getadmin )

 productRouter.post('/:id/reviews', getreview)
   



 module.exports =productRouter