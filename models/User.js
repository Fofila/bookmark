const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password:{
    type: String,
    required: true,
    max: 2048,
    min: 10
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);