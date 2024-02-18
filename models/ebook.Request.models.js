const mongoose = require('mongoose');
const{Schema} = mongoose;

const ebookRequestSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
const EbookRequest = mongoose.model('EbookRequest',EbookRequest);

module.exports = {
    EbookRequest
}