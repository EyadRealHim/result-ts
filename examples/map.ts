import { Result, success } from "../dist";

const result: Result<number, string> = success(42);

const transformedResult = result.map((value) => value * 2);

console.log(transformedResult.unwrap()); // 84
