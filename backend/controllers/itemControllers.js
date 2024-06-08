const AsyncHandler = require("express-async-handler");
const Item=require('../models/itemModel')

// desc- GET create item 
// route- GET /api/items
// access public

const getItems=AsyncHandler(async(req,res)=>{
    // Extract page and limit from query parameters, with default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    // Fetch the total count of items
    const totalItems = await Item.countDocuments();

    // Fetch the items with pagination
    const items = await Item.find().skip(skip).limit(limit);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / limit);

    // Send the paginated results
    res.status(200).json({
        page,
        totalPages,
        limit,
        totalItems,
        items
    });
})

// desc- GET create item 
// route- GET /api/items/:id
// access public
const getItemById = AsyncHandler(async (req, res) => {
    const { id } = req.params;
  
    const validId= mongoose.Types.ObjectId.isValid(id);
    console.log(validId)

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     res.status(400);
    //     throw new Error("Invalid item ID format");
    // }

    const item = await Item.findById(id);
    console.log("okii")
    if (!item) {
        res.status(404);
        throw new Error("Item not found");
    }

    res.status(200).json({ item });
});

// desc- POST create item 
// route- POST /api/items
// access - private

const createItem=AsyncHandler(async(req,res)=>{
        const {name,description,starting_price, current_price,image_url, end_time}=req.body

        if(!name || !description || !starting_price){
            res.status(400);
            throw new Error("All field are mandantory")
        }
        
        // check existing item 
        const existItem= await Item.findOne({name});

        if(existItem){
            res.status(400);
            throw new Error("User Exist !!")
        }
        console.log("items savedeee");

        const current_prices =current_price ||starting_price;
        
        const item= await Item.create({
            name ,
            description,
            starting_price,
            current_price :current_prices,
            image_url,
            end_time,
          


        })
        
        console.log("items saved");

        res.status(201).json({message:"Save item SuceessFully"
        })


        // 

        

        

    
    })

module.exports={getItems,getItemById,createItem}