import { Result } from ".";

export class Failure<TData, TError> {
  readonly success = false;
  constructor(readonly error: TError) {}

  isSuccess(): boolean {
    return false;
  }

  isFailure(): boolean {
    return true;
  }

  isSuccessAnd(_evaluate: (data: TData) => boolean): boolean {
    return false;
  }

  isFailureAnd(evaluate: (data: TError) => boolean): boolean {
    return evaluate(this.error);
  }

  unwrap(): TData {
    throw this.error;
  }

  unwrapOr(defaultValue: TData): TData {
    return defaultValue;
  }

  unwrapOrElse(evaluate: (data: TError) => TData): TData {
    return evaluate(this.error);
  }

  unwrapError() {
    return this.error;
  }

  expect(err: unknown) {
    throw err;
  }

  to<UData>(_data: UData): Result<UData, TError> {
    return new Failure<UData, TError>(this.error);
  }

  map<UData>(_evaluate: (data: TData) => UData): Result<UData, TError> {
    return new Failure<UData, TError>(this.error);
  }

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
