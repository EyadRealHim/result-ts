import { Result } from ".";

export class Failure<TData, TError> {
  readonly success = false;
  constructor(readonly error: TError) {}

  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `successful`, otherwise returns false.
   */
  isSuccess(): boolean {
    return false;
  }

  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `failure`, otherwise returns false.
   */
  isFailure(): boolean {
    return true;
  }

  /**
   * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
   * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
   * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
   */
  isSuccessAnd(_evaluate: (data: TData) => boolean): boolean {
    return false;
  }

  /**
   * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
   * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
   * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
   */
  isFailureAnd(evaluate: (data: TError) => boolean): boolean {
    return evaluate(this.error);
  }

  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws an exception if the result's content indicates a failure.
   * @returns The data from the successful result.
   */
  unwrap(): TData {
    throw this.error;
  }

  /**
   * @description Returns the data value if the content is successful, otherwise returns a default value.
   * @param defaultValue - The default value to be returned if the content is a failure.
   * @returns The data value if the content is successful, or the provided default value if the content is a failure.
   */
  unwrapOr(defaultValue: TData): TData {
    return defaultValue;
  }

  /**
   * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
   * @param evaluate A function that takes the error data and returns the computed data.
   * @returns The data from the successful result or the computed data from the evaluate function.
   */
  unwrapOrElse(evaluate: (data: TError) => TData): TData {
    return evaluate(this.error);
  }

  /**
   * @description Retrieves the error from the failure result's content.
   * @throws Throws an exception if the result's content indicates success.
   * @returns The error from the failure result.
   */
  unwrapError() {
    return this.error;
  }

  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws the provided custom exception if the result's content indicates a failure.
   * @param err The custom exception to be thrown.
   * @returns The data from the successful result.
   */
  expect(err: unknown) {
    throw err;
  }

  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
   * @param data - The new data to be included in the transformed result.
   * @returns The transformed result with the new data.
   */

  to<UData>(_data: UData): Result<UData, TError> {
    return new Failure<UData, TError>(this.error);
  }

  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
   * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
   * @returns A new Result instance with the transformed data or the original error.
   */
  map<UData>(_evaluate: (data: TData) => UData): Result<UData, TError> {
    return new Failure<UData, TError>(this.error);
  }

  /**
   *
   * @description Executes the appropriate callback based on the result's success or failure.
   * @param Ok - Callback function to execute if the result is successful.
   * @param Err - Callback function to execute if the result is a failure.
   */
  match<T, C>(_Ok: (data: TData) => T, Err: (error: TError) => C): C {
    return Err(this.error);
  }
}

/**
 * @description Creates a failure structure with the provided error.
 * @template TError - The type of the error.
 * @param error - The error object or value.
 * @returns A Failure object indicating a failure with the provided error.
 */
export function failure<TData, TError>(error: TError): Failure<TData, TError> {
  return new Failure(error);
}
