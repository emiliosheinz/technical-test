import collections from "../constants/collections.js";

collections
  .map(
    (collection) =>
      `https://api.opensea.io/api/v1/assets?collection=${collection}&format=json`
  )
  .forEach((url) => {
    console.log(url);
  });
