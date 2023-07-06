import { IReturnData } from "../../entity/base-interfaces";

import { ObjectSchema } from "joi";

export default function makeHello(helloValidation: ObjectSchema) {
  return async function hello({ body }): Promise<IReturnData> {
    const { value, error } = helloValidation.validate(body);
    if (error) throw error;
    const { name } = value;
    return {
      data: { message: `Hello ${name}` },
      type: "success",
      message: "Hello",
    };
  };
}
