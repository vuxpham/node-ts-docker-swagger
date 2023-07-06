import { Request } from "express";
import helloService from "../use-cases/hello";

export default Object.freeze({
  hello: async (req: Request) => helloService.hello(req),
});