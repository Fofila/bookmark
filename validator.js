const Joi = require("@hapi/joi");


const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data);
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data);
}

const linkValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    link: Joi.string().uri().required(),
    description: Joi.string().max(255),
    tags: Joi.array().items(Joi.string()),
    author: Joi.string().required()
  })
  return schema.validate(data);
}

const folderValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    url: Joi.string().max(128).uri(),
    description: Joi.string().max(255),
    parent: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    author: Joi.string().required()
  })
  return schema.validate(data);
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.linkValidation = linkValidation
module.exports.folderValidation = folderValidation