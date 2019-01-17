const mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,   
        unique: true,                   // TODO: VALIDATOR TO BE ADDED
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    teamName: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
            },
        name: String
    }
});



// PASSWORD HASHING TO BE ADDED


module.exports = mongoose.model("Student", studentSchema);
