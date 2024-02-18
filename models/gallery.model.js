const mongoose = require('mongoose');
const{Schema} = mongoose;

const gallerySchema = new Schema({
    image:{
        type:String,
        require:true
    }
})
const Gallery = mongoose.model('Gallery',gallerySchema);

module.exports = {
    Gallery
}