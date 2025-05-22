const jwt = require('jsonwebtoken');

//verifies jwt token
const jwtAuthMiddleware = (req,res,next)=>{
    const authorization = req.headers.authorization; //extract authorization header from the request
    if(!authorization) return res.status(401).json({error: "Token not found"})  //if header not exists it sends error

    const token = authorization.split(' ')[1];  //Bearer token, it splits by space and takes the second part(the actual token)
    if(!token) return res.status(401).json({error: "Unauthorized"}); //returns 401 unauthorized

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET)  //verify the token if its valid it will decode and return username , userid etc
        req.user = decoded;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}

//creates new token
const generateToken = (userData) =>{   
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn : '1h'})
}


module.exports = {jwtAuthMiddleware, generateToken}