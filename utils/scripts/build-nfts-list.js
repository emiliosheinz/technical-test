import * as fs from "fs";
import path from "path";

const responsesPath = ["utils", "responses"];
const responseFiles = fs.readdirSync(path.resolve(...responsesPath));
const NFTS_BY_COLLECTION = 4;

function makeNFT({
  id,
  image_url,
  image_preview_url,
  image_thumbnail_url,
  collection,
}) {
  return {
    id,
    price: Number((Math.random() * 10).toFixed(2)),
    image: {
      url: image_url,
      previewUrl: image_preview_url,
      thumbnailUrl: image_thumbnail_url,
    },
    collection: {
      name: collection?.name,
    },
  };
}

const nfts = responseFiles
  .map((file) => {
    const response = fs.readFileSync(
      path.resolve(...responsesPath, file),
      "utf8"
    );

    const nfts = JSON.parse(response).assets?.map((asset) => makeNFT(asset));

    if (!nfts) return null;

    nfts.length = NFTS_BY_COLLECTION;
    return nfts;
  })
  .filter(Boolean)
  .flat();

const server = {
  nfts: nfts.sort((a, b) => 0.5 - Math.random()),
};

fs.writeFileSync(path.resolve("server.json"), JSON.stringify(server));
