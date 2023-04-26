const bcrypt = require ('bcryptjs')
const data = {
    users:[
        {
            name: 'Tharuka',
            email: 'admin@gmail.com',
            password : bcrypt.hashSync('123456'),
            isAdmin:true,
            isCoach:false,
            isDoctor:false,
            isCustomer:false
            
        },
        {
            name: 'Rehan',
            email: 'user@gmail.com',
            password : bcrypt.hashSync('123456'),
            isAdmin:false,
            isCoach:false,
            isDoctor:false,
            isCustomer:true

        },
        {
            name: 'Harish',
            email: 'coach@gmail.com',
            password : bcrypt.hashSync('123456'),
            isAdmin:false,
            isCoach:true,
            isDoctor:false,
            isCustomer:false

        },
        {
            name: 'Nileesha',
            email: 'Doctor@gmail.com',
            password : bcrypt.hashSync('123456'),
            isAdmin:false,
            isCoach:false,
            isDoctor:true,
            isCustomer:false

        }
    ],
    products: [
        {
          
            name : 'suppliments',
            id : 'supp',
            category: 'Dumbels',
            image : 'https://images.everydayhealth.com/images/are-you-taking-too-many-supplements-1440x810.jpg?w=1110',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:3.5,
            numReviews:10,
            description : 'high quality product'


        },
        {
           
            name : 'dumbels',
            id: 'dumb',
            category: 'Suppliments',
            image : 'https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:2.5,
            numReviews:10,
            description : 'high quality product'


        },
        {
            
            name : 'benches',
            id : 'bench',
            category: 'Cage',
            image : 'https://assets.sweat.com/html_body_blocks/images/010/024/160/original/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801317',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:3.5,
            numReviews:10,
            description : 'high quality product'


        },
        {
           
            name : 'shorts',
            id : 'shr',
            category: 'Shirts',
            image : 'https://www.verywellfit.com/thmb/Wna-afek1wjS1HbHe65nXZH0Asg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3976890-GettyImages-1056286622-d16e8c2910344d7aa81f07508234373f.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:4,
            numReviews:104,
            description : 'high quality product'


        },
        {
            
            name : 'Fitness Roll',
            id : 'Fitness Roll',
            category: 'Shirts',
            image : 'https://static-01.daraz.lk/p/205f4d43a5e48aac4ab76bb4383ed4e0.jpg',
            price:120,
            countInStock:1,
            brand:'Nike',
            rating:4.5,
            numReviews:11,
            description : 'high quality product'


        },
        {
          
            name : 'Cage Machine',
            id : 'Cage Machine',
            category: 'Shirts',
            image : 'https://m.media-amazon.com/images/I/71Rk7mf3scL._AC_SL1500_.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:1.5,
            numReviews:102,
            description : 'high quality product'


        },
        {
          
            name : 'Nitro Tech',
            id : 'Nitro Tech',
            category: 'Shirts',
            image : 'https://www.suppliment.lk/wp-content/uploads/2014/04/31040834-88A5-4297-BFD1-085F43BB21BA.png',
            price:120,
            countInStock:4,
            brand:'Nike',
            rating:4.5,
            numReviews:13,
            description : 'high quality product'


        },
        {
           
            name : ' Hydro Whey',
            id : ' Hydro Whey',
            category: 'Shirts',
            image : 'https://media.istockphoto.com/id/1270924392/photo/sports-nutrition-supplements-and-chemistry-for-bodybuilding-in-gym-whey-protein-casein-bcaa.jpg?s=612x612&w=0&k=20&c=A5-71KBkd0Xzs0vihaf2DK5P7RNRO83Wq2TB7xwbiZ4=',
            price:120,
            countInStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description : 'high quality product'


        },
       

    ]
}
module.exports =  data