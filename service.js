

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const port = 8000;
app.use(express.json());
app.use(cookieParser())
const mongodbConnection = require('./dbConfig/mongodb.config');
mongodbConnection();
 
const serviceRoutes = require('../inner-eye/routes/service.route');
const blogRoutes = require('../inner-eye/routes/blogRoutes/blog.route');
const galleryRoutes = require('../inner-eye/routes/gallery.route');
const userRoutes = require('../inner-eye/routes/user.route');


app.use("/service",serviceRoutes)
app.use("/blog",blogRoutes)
app.use("/gallery",galleryRoutes)
app.use("/user",userRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})