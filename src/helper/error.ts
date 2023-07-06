export class CustomError extends Error {
  statusCode : number;
  constructor(statusCode : number, message : string) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.name = this.constructor.name;
  }
}

class BadRequestError extends CustomError {
  constructor(message : string) {
      super(400, message);
  }
}

class UnauthorizedError extends CustomError {
  constructor(message : string) {
      super(401, message);
  }
}

class InternalServerError extends CustomError {
  constructor(message : string) {
      super(500, message);
  }
}

/**
* Add custom error here
*/

class NotFoundError extends CustomError {
  constructor(message : string) {
      super(404, message);
  }
}

class ForbiddenError extends CustomError {
  constructor(message : string) {
      super(403, message);
  }
}

class DatabaseConstraintError extends CustomError {
  constructor(message : string) {
      super(409, message);
  }
}

export class CustomErrorFactory {
  static createError(error : Error) {
      if (error.name === 'ValidationError' || error.message.includes('ValidationError')) return new BadRequestError(error.message);
      if (error.name === 'Bad Request') return new BadRequestError(error.message);
      if (error.name === 'UnauthorizedError') return new UnauthorizedError(error.message);
      if(error.name === 'NotFoundError') return new NotFoundError(error.message);
      if(error.name === 'ForbiddenError') return new ForbiddenError(error.message);
      if(error.name === 'DatabaseConstraintError') return new DatabaseConstraintError(error.message);
      return new InternalServerError(error.message);
  }
}
