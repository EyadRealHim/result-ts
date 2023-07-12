import { Failure, failure } from "./Failure";
import { Success, success } from "./Success";

type FutureResult<TData, TError> = Promise<Result<TData, TError>>;

export { Failure, Success, FutureResult };
export { failure, success };

export type Result<TData, TError> = Success<TData, TError> | Failure<TData, TError>;
