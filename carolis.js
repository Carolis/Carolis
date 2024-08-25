#!/usr/bin/env node
"use strict";
const chalk = require('chalk')
const figlet = require('figlet');

const { readFile } = require("fs");
const { join } = require("path");

const message = chalk.magenta(
  figlet.textSync('Carolis', { font:"Slant", horizontalLayout: 'full' })
)

readFile(join(__dirname, "carolisInfo.json"), "utf8", (err, content) => {
  if (err) throw err;
  console.log(message)
  console.log(content);
});
