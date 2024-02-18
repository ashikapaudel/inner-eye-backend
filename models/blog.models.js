const mongoose = require('mongoose');
const{Schema} = mongoose;

const blogSchema = new Schema({
    tittle:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    authorImage:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },

})
const Blog = mongoose.model('Blog',blogSchema);

module.exports = {
    Blog
}