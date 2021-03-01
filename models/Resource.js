const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  link:{
    type: String,
    required: true,
    max: 2048
  },
  description: {
    type: String,
    max: 255
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array,
    required: true
  },
  folder: {
    type: String
  },
  public : {
    type: Boolean,
  },
  author: {
    type: String,
    required: true
  },
  shared: {
    type: Object
  }
});

module.exports = mongoose.model("Link", LinkSchema);