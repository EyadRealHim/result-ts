import { FutureResult, success, failure } from "../dist";

async function productIdentifier(id: number): FutureResult<string, string> {
  const response = await fetch("https://dummyjson.com/products/" + id);

  if (response.status !== 200) {
    return failure(response.statusText);
  }

  let content: unknown;

  try {
    content = await response.json();
  } catch (e: unknown) {
    return failure(
      typeof e == "object" && e !== null ? e.toString() : "unknown error. while parsing json"
    );
  }

  if (typeof content !== "object" || content == null)
    return failure("The JSON Content is not valid");

  if (!("title" in content) || typeof content["title"] !== "string") {
    return failure("The Product does not have a title");
  }

  if (!("brand" in content) || typeof content["brand"] !== "string") {
    return failure("The Product does not have a brand");
  }

  return success(content.title + " by " + content.brand);
}

void (async () => {
  const productOne = await productIdentifier(3);
  const productTwo = await productIdentifier(32532);

  console.log(productOne.unwrap()); // Samsung Universe 9 by Samsung
  console.log(productTwo.unwrap()); // throws error
})();
