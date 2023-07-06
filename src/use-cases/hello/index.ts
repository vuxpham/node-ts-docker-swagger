import makeHello from "./hello";
import helloValidation from "../../validation/hello.validation";

const hello = makeHello(helloValidation);

const helloService = Object.freeze({
  hello,
});

export default helloService;