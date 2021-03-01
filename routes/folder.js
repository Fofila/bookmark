const router = require("express").Router();
const verify = require('./verifyToken');
const {folderValidation} = require("../validator");
const Resource = require("../models/Folder");

router.get('/', verify, async (req, res) => {
  try {
    const folders = await Folders.find({ author : req.user._id });
    res.json(folders);
  } catch (error) {
    res.status(400).send({message: err})
  }    
})

router.post('/', verify, async (req, res) => {
  let name = (req.body.name) ? req.body.name : ""
  let url = (req.body.name) ? req.body.name : ""
  let description = (req.body.description) ? req.body.description : ""
  let parent = (req.body.parent) ? req.body.parent : ""
  let tags = (req.body.tags) ? req.body.tags : []
  let author = (req.user._i) ? req.user._id : ""
  const body = {
    name: name,
    url: url,
    description: description,
    parent: parent,
    tags: tags,
    author: author
  }
  console.log(body)
  // Validate data
  const {error} = folderValidation(body);
  if (error) return res.status(400).send(error.details[0].message);
  // create folder
  const folder = new Folder(body);
  try {
    const savedFolder = await folder.save();
    res.json(savedFolder);
  } catch(err){
    res.status(400).send({message: err})
  }
})

router.get('/:folderId', verify, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.folderId);
    res.json(resource);
  } catch (error) {
    res.status(400).send({message: err})
  }
})

router.patch('/:folderId', verify, async(req, res) => {
  try{
    let name = (req.body.name) ? req.body.name : ""
    let url = (req.body.name) ? req.body.name : ""
    let description = (req.body.description) ? req.body.description : ""
    let parent = (req.body.parent) ? req.body.parent : ""
    let tags = (req.body.tags) ? req.body.tags : []
    let author = (req.user._i) ? req.user._id : ""
    const updateLink = await Resource.updateOne({_id : req.params.folderId}, {
      $set : {
        name: name,
        url: url,
        description: description,
        parent: parent,
        tags: tags,
        author: author
      }
    });
    res.json(updateLink);
  }catch (err){
    res.status(400).send({message: err})
  }
});

router.delete('/:folderId', verify, async (req, res) => {
  try {
    const resource = await Resource.remove({_id : req.params.folderId});
    res.json(resource);
  } catch (error) {
    res.status(400).send({message: err})
  }
})

module.exports = router;
