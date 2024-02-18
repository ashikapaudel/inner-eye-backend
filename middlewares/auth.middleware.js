const jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/errorHandling");


const verifyJWT = async(req,res,next)=>{
    const token  = req.cookies?.token;
    console.log("This is jwt",token)

    if(!token){
        return res.status(401).json({
            statusCode:401,
            message:"Unauthorized - no token provided",
            success:false
        })
    }
    const decode =  jwt.verify(token,process.env.JWT_SECRET);
    console.log("This is DECODE" ,decode);
    next();

    try{
        const{_id} = decode;
        const user = await User.findById({
            _id:_id,
        });
        if(!user){
            return res.status(404).json({
                statusCode:404,
                message:"User not found",
                success:false,
                data:null
            })

        }
        req.user = user;
        next();
    }catch(error){
        errorHandler (reeor,res);
    }

}
module.exports = {
    verifyJWT
}