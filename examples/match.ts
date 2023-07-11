import { Result, success, failure } from "../dist";

void success, failure;

const result: Result<number, string> = failure("THIS IS FINE");
// const result: Result<number, string> = success(321);

console.log(
  result.match(
    (data) => "MyData:" + data,
    (err) => "ERROR: " + err
  )
);
