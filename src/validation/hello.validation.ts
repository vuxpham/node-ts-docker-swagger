import Joi from 'joi';

const helloValidation = Joi.object({
  name: Joi.string().required(),
});

export default helloValidation;