const jwt= require("jsonwebtoken")

const auth= (req,res,next)=>{
    const token= req.headers.authorization;
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            // console.log(decoded)
            if(decoded){
                req.body.userId=decoded.userId
                req.body.username= decoded.username
                next()
            }
            else{
                res.send({"error":err})
            }
        })
        }
        else{
            res.send({"msg":"Please Login"})
        }
}
module.exports={
    auth
}