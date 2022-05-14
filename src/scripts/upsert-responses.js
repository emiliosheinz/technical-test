import * as fs from "fs";
import path from "path";

import collections from "../collections.js";

async function upsertFile(name) {
  try {
    await fs.promises.readFile(name);
  } catch (error) {
    await fs.promises.writeFile(name, "{}");
  }
}

collections.forEach(async (collection) => {
  await upsertFile(path.relative("src", "assets", "responses", collection));
});
