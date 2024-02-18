const mongoose = require('mongoose');
const{Schema} = mongoose;

const serviceRegistrationSchema = new Schema({
    namee:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    service:{
        type:Schema.Types.ObjectId,
        ref:'Service',
    }
})
const ServiceRegistration = mongoose.model('ServiceRigistration',serviceRegistrationSchema);

module.exports = {
    ServiceRegistration
}