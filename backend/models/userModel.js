const mongoose = require('mongoose');

// Define the user schema
const userSchema = mongoose.Schema({
    
    // Username field
    username: {
        type: String,
        required: [true, "Please add the username"],
        unique: [true, "This username already exists"],
    },

    // Password field
    password: {
        type: String,
        required:  [true, "Please add the password"],
    },

    // Email field
    email: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "This email already exists"],
        // match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },

    // Role field with default value
    role: {
        type: String ,
        default: 'user',
        enum: ['user', 'admin'], // Restricts values to 'user' or 'admin'
    },

    // Created_at field with default value
    created_at: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true, // Disable automatic timestamps (createdAt, updatedAt)
});

module.exports = mongoose.model("User", userSchema);
