const router = require("express").Router();
const verify = require('./verifyToken');
const {linkValidation} = require("../validator");
const Resource = require("../models/Resource");

router.get('/', verify, async (req, res) => {
  try {
    const resources = await Resource.find({ author : req.user._id });
    res.json(resources);
  } catch (error) {
    res.status(400).send({message: err})
  }    
})

router.post('/', verify, async (req, res) => {
  let name = (req.body.name) ? req.body.name : "";
  let link = (req.body.link) ? req.body.link : "";
  let description = (req.body.description) ? req.body.description : "";
  let tags = (req.body.tags) ? req.body.tags : "";
  const body = {
    name: name,
    link: link,
    description: description,
    tags: tags,
    author: req.user._id
  }
  // Validate data
  const {error} = linkValidation(body);
  if (error) return res.status(400).send(error.details[0].message);
  // create link
  const element = new Resource(body);
  try {
    const savedResource = await element.save();
    res.status(201).json(savedResource);
  } catch(err){
    res.status(400).send({message: err})
  }
})

router.get('/:postId', verify, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.postId);
    res.json(resource);
  } catch (error) {
    res.status(400).send({message: err})
  }
})

router.patch('/:postId', verify, async(req, res) => {
  try{
    const resource = await Resource.findById(req.params.postId);
    let name = (req.body.name) ? req.body.name : resource.name
    let link = (req.body.link) ? req.body.link : resource.link
    let description = (req.body.description) ? req.body.description : resource.description
    let tags = (req.body.tags) ? req.body.tags : resource.tags
    const updateLink = await Resource.updateOne({_id : req.params.postId}, {
      $set : {
        name: name,
        link: link,
        description: description,
        tags: tags
      }
    });
    res.json(updateLink);
  }catch (err){
    res.status(400).send({message: err})
  }
});

router.delete('/:postId', verify, async (req, res) => {
  try {
    const resource = await Resource.remove({_id : req.params.postId});
    res.json(resource);
  } catch (error) {
    res.status(400).send({message: err})
  }
})

module.exports = router;
