import Joi from "joi";

const configValidation = Joi.object({
  PORT: Joi.number().default(8080),
}).unknown(true);

export default configValidation;