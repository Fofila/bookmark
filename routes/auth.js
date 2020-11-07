const router = require("express").Router();
const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const {registerValidation, loginValidation} = require("../validator");

router.post('/register', async (req, res) => {
  // Validate data
  const {error} = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // check if user exist
  const email_exist = await User.findOne({email: req.body.email})
  if (email_exist) return res.status(400).send('Email already exist');
  // create salt
  const salt = await bcrypt.genSalt(10);
  // hash password
  const hash = await bcrypt.hash(req.body.password, salt);
  // create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash
  });
  // save user
  try {
    const savedUser = await user.save();
    res.send({user: user._id});
  } catch(err){
    res.status(400).send(err)
  }
})

router.post('/login', async (req, res) =>{
  const {error} = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({email: req.body.email})
  if (!user) return res.status(400).send('User not found');
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(400).send('User or password is wrong');
  // create and assign jwt token

  const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET);
  console.log(token)
  res.header('auth-token', token).send(token);
})

module.exports = router;