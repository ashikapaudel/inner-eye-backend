const mongoose = require('mongoose');
const{Schema} = mongoose;

const serviceSchema = new Schema({
    tittle:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})
const Service = mongoose.model('ServiceSchema',serviceSchema);

module.exports = {
    Service
}