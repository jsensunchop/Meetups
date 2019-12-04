const User = require('../models/users');

exports.getUsers = function(req, res) {
  User.find({})
        .exec((errors, users) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(users);
  });
}

exports.register = function(req, res) {
  console.log('Hello from the register route')
  const registerData = red.body

  if(!registerData.email) {
    return res.status(422).json({
      errors:{
        email: 'is required'
      }
    })
  }

  if(!registerData.password) {
    return res.status(422).json({
      errors:{
        password: 'is required'
      }
    })
  }

  const user = new User(registerData);

  return user.save((erros, savedUser) =>{
    if(errors){
      return res.status(422).json({errors})
    }

    return res.json(savedUser)
  })
  
}
exports.login = function (req, res) {
  console.log('Hello from login endpoint!')
  const {email, password} =req.body

  if(!email) {
    return res.status(422).json({
      errors:{
        email: 'is required'
      }
    })
  }

  if(!password) {
    return res.status(422).json({
      errors:{
        password: 'is required'
      }
    })
  }

  return res.json({status: 'OK!'})
}