#!/usr/bin/env node

import parse from "./parsers/twitter.mjs";

const [, , ...args] = process.argv;

console.log(`hello world 2 ${args}`);

const tweet = await parse(args[0]);
console.log(tweet);
