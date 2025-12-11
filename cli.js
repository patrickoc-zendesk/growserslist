#!/usr/bin/env node

var chalk = require("chalk");

var r = chalk.red;
var y = chalk.yellow;
var b = chalk.yellow.bold;

process.stderr.write(
  "\n\n" +
    r("    ╭─────────────────────────────────╮\n") +
    r("    │                                 │\n") +
    r("    │  You made typo in") +
    b(" b") +
    y("rowserslist") +
    r("  │\n") +
    r("    │                                 │\n") +
    r("    ╰─────────────────────────────────╯\n") +
    "\n\n"
);
process.exit(1);
