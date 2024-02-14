// import mongoose
const mongoose = require("mongoose");


// route handler
const postSchema = mongoose.Schema({
    title:{
        type:string,
        required:true,
    },
    body:{
        type:string,
        required:true,
    },
    likes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }
});




//export 
module.exports = mongoose.model("Post",postSchema);