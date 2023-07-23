#!/usr/bin/env node
"use strict";
const chalk = require('chalk')
const figlet = require('figlet');

const { readFile } = require("fs");
const { join } = require("path");

readFile(join(__dirname, "carolisInfo.json"), "utf8", (err, content) => {
  if (err) throw err;
  console.log(chalk.magenta(
    figlet.textSync('Carolis', { font:"slant", horizontalLayout: 'full' })
  ))
  console.log(content);
});
