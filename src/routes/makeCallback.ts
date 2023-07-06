import { Request, Response } from "express";
import ResponseFactory from "../helper/responseJson";
import { IReturnData } from "../entity/base-interfaces";
import { CustomErrorFactory } from "../helper/error";

export default (controller: (req: Request) => Promise<IReturnData>) =>
  async (req: Request, res: Response) => {
    try {
      const return_obj = await controller(req);
      const response = await ResponseFactory.createResponse(return_obj);
      return response.send(res);
    } catch (error) {
      console.log(error);
      const customError = CustomErrorFactory.createError(error);
      const response = await ResponseFactory.createResponse({
        type: "error",
        data: customError,
        message: customError.message,
      });
      return response.send(res);
    }
  };
