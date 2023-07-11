import { Failure, failure } from "./Failure";
import { Success, success } from "./Success";

type FutureResult<TData, TError> = Promise<Result<TData, TError>>;

export { Failure, Success, FutureResult };
export { failure, success };

export type Result<TData, TError> = Success<TData, TError> | Failure<TData, TError>;

// export default class Result<TData, TError> {
//   constructor(protected readonly content: Success<TData> | Failure<TError>) {}

//   /**
//    * @description Checks whether the content indicates success or failure.
//    * @returns Returns true if the content is `successful`, otherwise returns false.
//    */
//   isSuccess(): boolean {
//     return this.content.success;
//   }

//   /**
//    * @description Checks whether the content indicates success or failure.
//    * @returns Returns true if the content is `failure`, otherwise returns false.
//    */
//   isFailure(): boolean {
//     return !this.content.success;
//   }

//   /**
//    * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
//    * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
//    * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
//    */
//   isSuccessAnd(evaluate: (data: TData) => boolean): boolean {
//     return this.content.success && evaluate(this.content.data);
//   }

//   /**
//    * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
//    * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
//    * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
//    */
//   isFailureAnd(evaluate: (data: TError) => boolean): boolean {
//     return !this.content.success && evaluate(this.content.error);
//   }

//   /**
//    * @description Retrieves the successful result's data from the content.
//    * @throws Throws an exception if the result's content indicates a failure.
//    * @returns The data from the successful result.
//    */
//   unwrap(): TData {
//     if (this.content.success) return this.content.data;

//     throw this.content.error;
//   }

//   /**
//    * @description Returns the data value if the content is successful, otherwise returns a default value.
//    * @param defaultValue - The default value to be returned if the content is a failure.
//    * @returns The data value if the content is successful, or the provided default value if the content is a failure.
//    */
//   unwrapOr(defaultValue: TData): TData {
//     if (this.content.success) return this.content.data;

//     return defaultValue;
//   }

//   /**
//    * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
//    * @param evaluate A function that takes the error data and returns the computed data.
//    * @returns The data from the successful result or the computed data from the evaluate function.
//    */
//   unwrapOrElse(evaluate: (data: TError) => TData): TData {
//     if (this.content.success) return this.content.data;

//     return evaluate(this.content.error);
//   }

//   /**
//    * @description Retrieves the successful result's data from the content.
//    * @throws Throws the provided custom exception if the result's content indicates a failure.
//    * @param err The custom exception to be thrown.
//    * @returns The data from the successful result.
//    */
//   expect(err: unknown): TData {
//     if (this.content.success) return this.content.data;

//     throw err;
//   }

//   /**
//    * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
//    * @param data - The new data to be included in the transformed result.
//    * @returns The transformed result with the new data.
//    */

//   to<UData>(data: UData): Result<UData, TError> {
//     if (this.content.success) return new Result(success(data));

//     return new Result(this.content);
//   }

//   /**
//    * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
//    * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
//    * @returns A new Result instance with the transformed data or the original error.
//    */
//   map<UData>(evaluate: (data: TData) => UData): Result<UData, TError> {
//     if (this.content.success) return new Result(success(evaluate(this.content.data)));

//     return new Result(this.content);
//   }
// }
