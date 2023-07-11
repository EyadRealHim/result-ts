import { Result, success, failure } from "../dist";

function isUint(x: number): Result<null, "`x` must be a integer" | "`x` cannot be negative"> {
  if (x <= -1) return failure("`x` cannot be negative");
  if (!Number.isInteger(x)) return failure("`x` must be a integer");

  return success(null);
}

isUint(3.00001).unwrap(); // throws "`x` must be a integer"
isUint(-1).unwrap(); // throws  "`x` cannot be negative"
isUint(1).unwrap(); // returns `1`
