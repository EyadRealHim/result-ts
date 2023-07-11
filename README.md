# ResultTS

## Overview

ResultTS is a simple yet powerful implementation of the Result Type. It provides a Result type that is used for returning and propagating errors in a convenient and efficient manner.

This library is designed to enabling developers to handle errors in a more structured and expressive way.

## Features

- `Result<TData, TError>` type: Represents the result of an operation that can either return a value of type `TData` or an error of type `TError`.
- Error handling: Provides utilities for handling errors, including `map`, `unwrap`, `expect`, and more.

## Installation

ResultTS can be installed using npm:

```bash
npm install result-ts
```

## Usage

Import the `Result` type and relevant functions from the `result-ts` package:

```typescript
import { Result, success, failure } from "result-ts";
```

### Creating Results

```typescript
const success: Result<number, string> = success(42); // Result containing a value
const failure: Result<number, string> = failure("Error"); // Result containing an error
```

### Error Handling

You can handle errors using the `match` function, which takes two callbacks—one for the success case and one for the error case:

```typescript
const result: Result<number, string> = success(42);

const message = result.match(
  (value) => `The result is ${value}`,
  (error) => `An error occurred: ${error}`
);

console.log(message); // Output: `The result is 42`
```

### Chaining Results

Results can be transformed and chained using the provided utility functions. For example:

```typescript
const result: Result<number, string> = success(42);

const transformedResult = result.map((value) => value * 2);

console.log(transformedResult.unwrap()); // 84
```

## Contributing

Contributions are welcome! If you find a bug, have a feature request, or want to suggest improvements, please open an issue on the [GitHub repository](https://github.com/EyadRealHim/result-ts).

If you want to contribute code, please fork the repository and submit a pull request with your changes. Make sure to follow the coding conventions and include tests for any new functionality.

## License

ResultTS is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as per the terms of the license.
