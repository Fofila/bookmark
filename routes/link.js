const router = require("express").Router();
const verify = require('./verifyToken');
const {linkValidation} = require("../validator");
const Resource = require("../models/Resource");

// TODO create function that get every link visible by the user
router.get('/', verify, async (req, res) => {
  try {
    const resources = await Resource.find({ author : req.user._id });
    res.json(resources);
  } catch (error) {
    res.status(400).send({message: err})
  }    
})

router.post('/', verify, async (req, res) => {
  // TODO remove undefined fields
  const body = {
    name: req.body.name,
    link: req.body.link,
    description: req.body.description,
    tags: req.body.tags,
    author: req.user._id
  }
  console.log(body)
  // Validate data
  const {error} = linkValidation(body);
  if (error) return res.status(400).send(error.details[0].message);
  // create link
  const link = new Resource(body);
  // create link
  console.log("The error is not here")
  try {
    const savedResource = await link.save();
    res.json(savedResource);
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
    const updateLink = await Resource.updateOne({_id : req.params.postId}, {
      $set : {
        name: req.body.name,
        link: req.body.link,
        description: req.body.description,
        tags: req.body.tags
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
