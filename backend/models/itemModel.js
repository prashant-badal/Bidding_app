const mongoose = require('mongoose');

// Define the item schema
const itemSchema = new mongoose.Schema({
    // Primary Key - mongoose will automatically create an _id field of type ObjectId
    name: {
        type: String,
        required: [true, 'Please add the item name'],
        // unique: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    starting_price: {
        type: mongoose.Types.Decimal128,
        required: [true, 'Please add the starting price'],
    },
    current_price: {
        type: mongoose.Types.Decimal128,
        default: function() {
            return this.starting_price;
        },
    },
    image_url: {
        type: String,
        default: null,
    },
    end_time: {
        type: Date,
        required: [true, 'Please add the auction end time'],
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
