import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";

import specs from './swagger';
import swaggerUI from 'swagger-ui-express';

// Routers import
import helloRoutes from "./routes/hello.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(express.static("public"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(helloRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});