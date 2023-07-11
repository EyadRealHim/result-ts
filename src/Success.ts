import { Result } from ".";

export class Success<TData, TError> {
  readonly success = true;
  constructor(readonly data: TData) {}

  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `successful`, otherwise returns false.
   */
  isSuccess(): boolean {
    return true;
  }

  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `failure`, otherwise returns false.
   */
  isFailure(): boolean {
    return false;
  }

  /**
   * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
   * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
   * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
   */
  isSuccessAnd(evaluate: (data: TData) => boolean): boolean {
    return evaluate(this.data);
  }

  /**
   * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
   * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
   * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
   */
  isFailureAnd(_evaluate: (data: TError) => boolean): boolean {
    return false;
  }

  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws an exception if the result's content indicates a failure.
   * @returns The data from the successful result.
   */
  unwrap(): TData {
    return this.data;
  }

  /**
   * @description Returns the data value if the content is successful, otherwise returns a default value.
   * @param defaultValue - The default value to be returned if the content is a failure.
   * @returns The data value if the content is successful, or the provided default value if the content is a failure.
   */
  unwrapOr(_defaultValue: TData): TData {
    return this.data;
  }

  /**
   * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
   * @param evaluate A function that takes the error data and returns the computed data.
   * @returns The data from the successful result or the computed data from the evaluate function.
   */
  unwrapOrElse(_evaluate: (data: TError) => TData): TData {
    return this.data;
  }

  /**
   * @description Retrieves the error from the failure result's content.
   * @throws Throws an exception if the result's content indicates success.
   * @returns The error from the failure result.
   */
  unwrapError() {
    throw new Error("Result is successful");
  }

  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws the provided custom exception if the result's content indicates a failure.
   * @param err The custom exception to be thrown.
   * @returns The data from the successful result.
   */
  expect(_err: unknown): TData {
    return this.data;
  }

  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
   * @param data - The new data to be included in the transformed result.
   * @returns The transformed result with the new data.
   */

  to<UData>(data: UData): Result<UData, TError> {
    return new Success(data);
  }

  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
   * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
   * @returns A new Result instance with the transformed data or the original error.
   */
  map<UData>(evaluate: (data: TData) => UData): Result<UData, TError> {
    return new Success(evaluate(this.data));
  }

  /**
   *
   * @description Executes the appropriate callback based on the result's success or failure.
   * @param Ok - Callback function to execute if the result is successful.
   * @param Err - Callback function to execute if the result is a failure.
   */
  match<T, C>(Ok: (data: TData) => T, _Err: (error: TError) => C): T {
    return Ok(this.data);
  }
}

/**
 * @description Creates a success structure with the provided data.
 * @template TData - The type of the data.
 * @param data - The data value.
 * @returns A Success object indicating a success with the provided data.
 */
export function success<TData, TError>(data: TData): Success<TData, TError> {
  return new Success(data);
}
