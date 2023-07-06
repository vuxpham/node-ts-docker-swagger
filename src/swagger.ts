import swaggerJsDoc from 'swagger-jsdoc';

import config from './config';

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Template Express API",
      version: "1.0.0",
      description: "A simple Express API Template",
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
      }
    ]
  },
  apis: ["./src/routes/*.routes.ts"],
};

const specs = swaggerJsDoc(options);

export default specs;