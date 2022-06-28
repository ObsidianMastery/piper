#!/usr/bin/env node

import minimist from 'minimist'
import twitter from "./parsers/twitter.mjs";
import youtube from "./parsers/youtube.mjs";

const TWITTER_URL = /(https:\/\/twitter.com\/)/;
const YOUTBUE_URL = /(youtube.com|youtu.be)\//;

var argv = minimist(process.argv.slice(2));

let data = {}

if(YOUTBUE_URL.test(argv._)){
  data = await youtube(argv._);
}

if (TWITTER_URL.test(argv._)) {
  data = await twitter(argv._);
}

let out = ""
if (argv.o == 'code'){
  out = '```'
}
if (argv.f == "html") {
  out += data.html;
}
if (!argv.f || argv.f == "json") {
  out = `${out}\n${JSON.stringify(data, null, 2)}`;
}
if (argv.f == "text") {
  out = `${out}\n${data.parsed}`;
}
if (argv.o == "code") {
  out += "\n```";
}
console.log(out)