const mongoose = require("mongoose");

// TODO: add image
// TODO: add position {}
// TODO: add files (images? videos? more files?)
// TODO: add geocoord?
const LinkSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  link:{
    type: String,
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
  private : {
    type: Boolean,
  },
  size : {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
  shared: {
    type: Object
  },
  color: {
    type: String
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("Link", LinkSchema);