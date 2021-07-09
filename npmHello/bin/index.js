#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const greeting = chalk.green.bold("Hello with NPM!");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "#006847",
    backgroundColor: "#111111"
};

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);