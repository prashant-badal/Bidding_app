

const {getItems,getItemById,createItem,updatedAuctionItem,deleteItem}=require("../controllers/itemControllers")
const express = require('express');
const router = express.Router();

router.route('/')
.get(getItems)
.post(createItem)

router.route("/:id").get(getItemById)
router.route("/:id").put(updatedAuctionItem)
// router.route("/:id").delete( deleteItem)

module.exports = router;