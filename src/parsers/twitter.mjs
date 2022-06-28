import fetch from "node-fetch";
import { parseHtmlContent } from "../parsehtml.js";

export async function oembed(url) {
  const r = await fetch(`https://publish.twitter.com/oembed?url=${url}`);
  return await r.json()
}

export default async function parse(url){
  const tweet = await oembed(url)
  tweet['parsed'] = await parseHtmlContent(tweet.html);
  return tweet
}
