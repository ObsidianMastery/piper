import fetch from "node-fetch";

export async function oembed(url) {
  const r = await fetch(`https://youtube.com/oembed?url=${url}&format=json`);
  return await r.json();
}

async function parse(url) {
  return await oembed(url);
}

export default parse;
