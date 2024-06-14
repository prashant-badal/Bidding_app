const mongoose = require('mongoose');

// Define the item schema
const itemSchema = new mongoose.Schema({
    
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    name: {
        type: String,
        required: [true, 'Please add the item name'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    starting_price: {
        type: Number,
        required: [true, 'Please add the starting price'],
    },
    current_price: {
        type: mongoose.Types.Decimal128,
        require:false
    },
    image_url: {
        type: String,
        default: null,
    },
    end_time: {
        type: String,
        require:false
        // required: [true, 'Please add the auction end time'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create the model from the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
