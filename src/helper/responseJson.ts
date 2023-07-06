import { Response } from "express";
import { CustomError } from "./error";
/*
    Add custom responses here
*/

interface IResponseJson {
  code: number;
  message: string;
  data: object | null;
  status: boolean;
}

class ResponseJson implements IResponseJson {
  code: number;
  message: string;
  data: object;
  status: boolean;
  constructor(code: number, message: string, data = null) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.status = true;
  }

  send = async (res: Response) => {
    return res.status(this.code).json({
      code: this.code,
      message: this.message,
      data: this.data,
      status: this.status,
    });
  };
}

class ResponseSuccess extends ResponseJson {
  constructor(data: object, message = "Success") {
    super(200, message, data);
  }
}

class ResponseCreated extends ResponseJson {
  constructor(data: object, message = "Created") {
    super(201, message, data);
  }
}

class ResponseDeleted extends ResponseJson {
  constructor(data: object, message = "Deleted") {
    super(204, message, data);
  }
}

class ResponseError extends ResponseJson {
  constructor(error: CustomError, message = null) {
    super(error.statusCode, message ? message : error.message, error.name);
    this.status = false;
  }
}

class ResponseFactory {
  static async createResponse({ type, data, message }) {
    if (type === "success") return new ResponseSuccess(data, message);
    if (type === "created") return new ResponseCreated(data, message);
    if (type === "deleted") return new ResponseDeleted(data, message);
    if (type === "error") return new ResponseError(data, message);
  }
}

export default ResponseFactory;
