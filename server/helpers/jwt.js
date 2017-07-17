const jwt = require('jsonwebtoken');

let jwtVerify = (req,res,next) => {
  jwt.verify(req.headers.token, 'secret', (err,decoded)=>{
    if (err) res.send(err)
    if(decoded){
      req.user=decoded
      console.log(decoded)
      next()
    }
  })
}

module.exports = jwtVerify;