// const expressAsyncHandler = require("express-async-handler");
// const Item =require('../models/itemModel')


// const  checkOwnerShip= expressAsyncHandler(async(req,res,next)=>{
//     const { id } = req.params;
//     const userId = req.user.id;

//     const item = await Item.findById(id);

//         if (!item) {
//             res.status(404).json({ message: 'Item not found' });
//         }

//         // const user = await User.findById(userId);

//         if (item.owner.toString() !== userId ) {
//             res.status(403).json({ message: 'User not authorized' });
//         }

//         next();

// })
// module.exports=checkOwnerShip
