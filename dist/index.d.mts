declare class Failure<TData, TError> {
    readonly error: TError;
    readonly success = false;
    constructor(error: TError);
    isSuccess(): boolean;
    isFailure(): boolean;
    isSuccessAnd(_evaluate: (data: TData) => boolean): boolean;
    isFailureAnd(evaluate: (data: TError) => boolean): boolean;
    unwrap(): TData;
    unwrapOr(defaultValue: TData): TData;
    unwrapOrElse(evaluate: (data: TError) => TData): TData;
    unwrapError(): TError;
    expect(err: unknown): void;
    to<UData>(_data: UData): Result<UData, TError>;
    map<UData>(_evaluate: (data: TData) => UData): Result<UData, TError>;
    match<T, C>(_Ok: (data: TData) => T, Err: (error: TError) => C): C;
}
/**
 * @description Creates a failure structure with the provided error.
 * @template TError - The type of the error.
 * @param error - The error object or value.
 * @returns A Failure object indicating a failure with the provided error.
 */
declare function failure<TData, TError>(error: TError): Failure<TData, TError>;

declare class Success<TData, TError> {
    readonly data: TData;
    readonly success = true;
    constructor(data: TData);
    /**
     * @description Checks whether the content indicates success or failure.
     * @returns Returns true if the content is `successful`, otherwise returns false.
     */
    isSuccess(): boolean;
    /**
     * @description Checks whether the content indicates success or failure.
     * @returns Returns true if the content is `failure`, otherwise returns false.
     */
    isFailure(): boolean;
    /**
     * @description Checks if the content indicates `success` and evaluates the provided function against the `data`.
     * @param evaluate A function that takes the `data` from the `successful` result and returns a boolean value.
     * @returns True if the content indicates `success` and the evaluate function returns true, otherwise false.
     */
    isSuccessAnd(evaluate: (data: TData) => boolean): boolean;
    /**
     * @description Checks if the content indicates `failure` and evaluates the provided function against the `error`.
     * @param evaluate A function that takes the `error` from the `failure` result and returns a boolean value.
     * @returns True if the content indicates `failure` and the evaluate function returns true, otherwise false.
     */
    isFailureAnd(_evaluate: (data: TError) => boolean): boolean;
    /**
     * @description Retrieves the successful result's data from the content.
     * @throws Throws an exception if the result's content indicates a failure.
     * @returns The data from the successful result.
     */
    unwrap(): TData;
    /**
     * @description Returns the data value if the content is successful, otherwise returns a default value.
     * @param defaultValue - The default value to be returned if the content is a failure.
     * @returns The data value if the content is successful, or the provided default value if the content is a failure.
     */
    unwrapOr(_defaultValue: TData): TData;
    /**
     * @description Returns the data value if the content is successful, otherwise computes it using the provided evaluate function and returns the computed value.
     * @param evaluate A function that takes the error data and returns the computed data.
     * @returns The data from the successful result or the computed data from the evaluate function.
     */
    unwrapOrElse(_evaluate: (data: TError) => TData): TData;
    /**
     * @description Retrieves the error from the failure result's content.
     * @throws Throws an exception if the result's content indicates success.
     * @returns The error from the failure result.
     */
    unwrapError(): void;
    /**
     * @description Retrieves the successful result's data from the content.
     * @throws Throws the provided custom exception if the result's content indicates a failure.
     * @param err The custom exception to be thrown.
     * @returns The data from the successful result.
     */
    expect(_err: unknown): TData;
    /**
     * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by replacing the original **data** with the provided **UData**.
     * @param data - The new data to be included in the transformed result.
     * @returns The transformed result with the new data.
     */
    to<UData>(data: UData): Result<UData, TError>;
    /**
     * @description Transforms a `Result<TData, TError>` into a `Result<UData, TError>` by applying a provided function to the data.
     * @param evaluate A function that maps the data of type `TData` to a new type `UData`.
     * @returns A new Result instance with the transformed data or the original error.
     */
    map<UData>(evaluate: (data: TData) => UData): Result<UData, TError>;
    /**
     *
     * @description Executes the appropriate callback based on the result's success or failure.
     * @param Ok - Callback function to execute if the result is successful.
     * @param Err - Callback function to execute if the result is a failure.
     */
    match<T, C>(Ok: (data: TData) => T, _Err: (error: TError) => C): T;
}
/**
 * @description Creates a success structure with the provided data.
 * @template TData - The type of the data.
 * @param data - The data value.
 * @returns A Success object indicating a success with the provided data.
 */
declare function success<TData, TError>(data: TData): Success<TData, TError>;

type FutureResult<TData, TError> = Promise<Result<TData, TError>>;

type Result<TData, TError> = Success<TData, TError> | Failure<TData, TError>;

export { Failure, FutureResult, Result, Success, failure, success };
