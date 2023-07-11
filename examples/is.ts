import { Result, success, failure } from "../dist";

const TARGET_NUMBER = 5;

// These examples are really bad LOL.

function guessWhoAmI(guess: number): Result<number, "My Value is Less." | "My Value is more."> {
  if (guess !== TARGET_NUMBER) {
    if (guess > TARGET_NUMBER) return failure("My Value is Less.");
    else return failure("My Value is more.");
  }

  return success(guess);
}

const attempts = [3, 7, 99, 1, -5, 5];

for (let guess of attempts) {
  const result = guessWhoAmI(guess);

  if (result.isSuccess()) {
    console.log("[SUCCESS] Congratulations! You guessed correctly. I am " + result.unwrap());
  }

  if (result.isFailure()) {
    console.info("[FAIL] Oops! You guessed wrong. " + result.unwrapError());
  }
}
