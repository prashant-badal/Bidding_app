const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = asyncHandler(async (req, res, next) => {
  let token;
 
  const authToken = req.headers.authorization || req.headers.Authorization;
  console.log('Signing Secret Key:', process.env.ACCESS_TOKEN_SECRETE);
  if (authToken && authToken.startsWith("Bearer")) {
    token = authToken.split(" ")[1];
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE, (err, decoded) => {
      if (err) {
        console.log(process.env.ACCESS_TOKEN_SECRETE)
     
        res.status(401).json({ error: 'User is not authorized' });
      }
      console.log("requser",req.user);
      req.user = decoded.user;
      console.log(req.user); // Log the decoded user for debugging
      next(); // Call next() here to move to the next middleware
    });
  } else {
    
    res.status(401);
    throw new Error("Token is not valid or missing");
  }
});

module.exports = validateTokenHandler;
