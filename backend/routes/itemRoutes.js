

const {getItems,getItemById,createItem}=require("../controllers/itemControllers")
const express = require('express');
const router = express.Router();

router.route('/')
.get(getItems)
.post(createItem)

router.route("/:id").get(getItemById)

module.exports = router;