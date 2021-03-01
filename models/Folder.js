const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    max: 255
  },
  url:{
    type: String,
    max: 128
  },
  description: {
    type: String,
    max: 255
  },
  parent: {
    type : String
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array
  },
  author: {
    type: String,
    required: true
  },
  shared: {
    type: Object
  }
});

module.exports = mongoose.model("Folder", FolderSchema);