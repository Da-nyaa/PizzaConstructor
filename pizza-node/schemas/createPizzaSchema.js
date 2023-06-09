/* eslint-disable import/no-extraneous-dependencies */
const Joi = require('joi');

const schemas = {
  signUp: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    passwordConfirmation: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
};

module.exports = schemas;
