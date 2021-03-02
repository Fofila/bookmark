const Joi = require("@hapi/joi");


const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data, {allowUnknown:true});
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data, {allowUnknown:true});
}

const linkValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    link: Joi.string().uri().required(),
    description: Joi.string().max(255),
    tags: Joi.array().items(Joi.string()),
    author: Joi.string().required()
  })
  return schema.validate(data, {allowUnknown:true});
}

const folderValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    url: Joi.string().max(128).uri().required().allow(''),
    description: Joi.string().max(255).allow(''),
    parent: Joi.string().allow(''),
    tags: Joi.array().items(Joi.string()),
    author: Joi.string().required()
  })
  return schema.validate(data, {allowUnknown:true});
}

const shareValidation = (data) => {
  const schema = Joi.object({
    resource: Joi.string().required(),
    role: Joi.string().required(),
    user: Joi.string().required()
  })
  return schema.validate(data, {allowUnknown:true});
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.linkValidation = linkValidation
module.exports.folderValidation = folderValidation
module.exports.shareValidation = shareValidation