const mongoose = require('mongoose');

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

async function connectMongodb(){
    try{
    console.log("Hello",user);
    console.log("Hello",password)
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.san6bm1.mongodb.net/?retryWrites=true&w=majority`);
}catch (error) {
    console.log('Error connecting to mongodb',error);
    ProcessingInstruction.exit(1);
}
}

module.exports = connectMongodb;