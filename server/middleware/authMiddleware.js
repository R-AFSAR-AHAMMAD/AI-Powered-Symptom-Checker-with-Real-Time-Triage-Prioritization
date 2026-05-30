const jwt = require("jsonwebtoken");

const authMiddleware = async (request,response,next)=>{
    try{
        const authHeader = request.headers.authorization;

        if(!authHeader){
            return response.status(401).json({error:"No token provided"})
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        request.user = decoded;
        next();
    }catch(e){
        return response.status(401).json({error:"Invalid Token"});
    }
}

module.exports = authMiddleware;