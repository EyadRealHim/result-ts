// src/Failure.ts
var Failure = class _Failure {
  constructor(error) {
    this.error = error;
    this.success = false;
  }
  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `successful`, otherwise returns false.
   */
  isSuccess() {
    return false;
  }
  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `failure`, otherwise returns false.
   */
  isFailure() {
    return true;
  }
  /**
   * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
   * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
   * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
   */
  isSuccessAnd(_evaluate) {
    return false;
  }
  /**
   * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
   * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
   * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
   */
  isFailureAnd(evaluate) {
    return evaluate(this.error);
  }
  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws an exception if the result's content indicates a failure.
   * @returns The data from the successful result.
   */
  unwrap() {
    throw this.error;
  }
  /**
   * @description Returns the data value if the content is successful, otherwise returns a default value.
   * @param defaultValue - The default value to be returned if the content is a failure.
   * @returns The data value if the content is successful, or the provided default value if the content is a failure.
   */
  unwrapOr(defaultValue) {
    return defaultValue;
  }
  /**
   * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
   * @param evaluate A function that takes the error data and returns the computed data.
   * @returns The data from the successful result or the computed data from the evaluate function.
   */
  unwrapOrElse(evaluate) {
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
  expect(err) {
    throw err;
  }
  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
   * @param data - The new data to be included in the transformed result.
   * @returns The transformed result with the new data.
   */
  to(_data) {
    return new _Failure(this.error);
  }
  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
   * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
   * @returns A new Result instance with the transformed data or the original error.
   */
  map(_evaluate) {
    return new _Failure(this.error);
  }
  /**
   *
   * @description Executes the appropriate callback based on the result's success or failure.
   * @param Ok - Callback function to execute if the result is successful.
   * @param Err - Callback function to execute if the result is a failure.
   */
  match(_Ok, Err) {
    return Err(this.error);
  }
};
function failure(error) {
  return new Failure(error);
}

// src/Success.ts
var Success = class _Success {
  constructor(data) {
    this.data = data;
    this.success = true;
  }
  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `successful`, otherwise returns false.
   */
  isSuccess() {
    return true;
  }
  /**
   * @description Checks whether the content indicates success or failure.
   * @returns Returns true if the content is `failure`, otherwise returns false.
   */
  isFailure() {
    return false;
  }
  /**
   * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
   * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
   * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
   */
  isSuccessAnd(evaluate) {
    return evaluate(this.data);
  }
  /**
   * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
   * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
   * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
   */
  isFailureAnd(_evaluate) {
    return false;
  }
  /**
   * @description Retrieves the successful result's data from the content.
   * @throws Throws an exception if the result's content indicates a failure.
   * @returns The data from the successful result.
   */
  unwrap() {
    return this.data;
  }
  /**
   * @description Returns the data value if the content is successful, otherwise returns a default value.
   * @param defaultValue - The default value to be returned if the content is a failure.
   * @returns The data value if the content is successful, or the provided default value if the content is a failure.
   */
  unwrapOr(_defaultValue) {
    return this.data;
  }
  /**
   * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
   * @param evaluate A function that takes the error data and returns the computed data.
   * @returns The data from the successful result or the computed data from the evaluate function.
   */
  unwrapOrElse(_evaluate) {
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
  expect(_err) {
    return this.data;
  }
  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
   * @param data - The new data to be included in the transformed result.
   * @returns The transformed result with the new data.
   */
  to(data) {
    return new _Success(data);
  }
  /**
   * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
   * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
   * @returns A new Result instance with the transformed data or the original error.
   */
  map(evaluate) {
    return new _Success(evaluate(this.data));
  }
  /**
   *
   * @description Executes the appropriate callback based on the result's success or failure.
   * @param Ok - Callback function to execute if the result is successful.
   * @param Err - Callback function to execute if the result is a failure.
   */
  match(Ok, _Err) {
    return Ok(this.data);
  }
};
function success(data) {
  return new Success(data);
}
export {
  Failure,
  Success,
  failure,
  success
};
