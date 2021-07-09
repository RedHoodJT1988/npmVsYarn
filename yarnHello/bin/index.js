#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.cyanBright.bold("Hello with Yarn!");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble",
    borderColor: "#7BAFD4",
    backgroundColor: "#8D9092"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);