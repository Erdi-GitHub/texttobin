#!/usr/bin/env node

require("../index");
const yargs = require("yargs");

const str = yargs
    .usage("Usage: to-bin <string>")
    .argv
    ._
    .join(" ");

console.log(str.toBinary().join(" "));