import dotenv from 'dotenv';

import configValidation from './validation/config.validation';

dotenv.config();

const { error, value: envVars } = configValidation.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  port: envVars.PORT,
};

export default config;