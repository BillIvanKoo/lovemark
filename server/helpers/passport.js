var User = require('../models/user')
const bcrypt = require('bcrypt');

validate = (username, password, next) => {
  let findUser = User.findOne({username: username}, (err,user)=>{
    if(err || user === null){
      next(null, false, {message: 'Incorrect username.'})
    } else {
      bcrypt.compare(password, user.password, (err,res)=>{
        if(err){
          next(err)
        } else if (res){
          next(null, user)
        } else {
          next(null, false, {message: 'Incorrect password.'})
        }
      })
    }
  })
}

module.exports = validate;