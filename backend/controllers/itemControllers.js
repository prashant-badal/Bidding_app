const AsyncHandler = require("express-async-handler");
const Item=require('../models/itemModel')

// desc- GET create item 
// route- GET /api/items

const getItems=AsyncHandler(async(req,res)=>{
    // const {name,description,starting_price}=req.body
    const item=Item.findAll()

})

// desc- POST create item 
// route- POST /api/items
// access - private

const createItem=ExpressAsyncHandler(async(req,res)=>{
        const {name,description,starting_price}=req.body

        if(!name)

    
    })

module.exports={createItem}