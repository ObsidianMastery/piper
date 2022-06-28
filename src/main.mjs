#!/usr/bin/env node

import minimist from 'minimist'
import parse from "./parsers/twitter.mjs";

var argv = minimist(process.argv.slice(2));
const tweet = await parse(argv._);

let out = ""
if (argv.o == 'code'){
  out = '```'
}
if (argv.t == "html") {
  out += tweet.html;
}
if (argv.t == "json") {
  out = `${out}\n${JSON.stringify(tweet, null, 2)}`;
}
if (!argv.t || argv.t == "parsed") {
  out = `${out}\n${tweet.parsed}` ;
}
if (argv.o == "code") {
  out += "\n```";
}
console.log(out)