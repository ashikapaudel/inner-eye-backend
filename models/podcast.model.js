const mongoose = require('mongoose');
const{Schema} = mongoose;

const podcastSchema = new Schema({
    video:{
        type:String,
        require:true
    }
})
const Podcast = mongoose.model('Podcast',Podcast);

module.exports = {
    Podcast
}