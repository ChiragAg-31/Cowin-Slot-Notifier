#! /usr/bin/env node
const states = require("../util/states");
const districts = require("../util/districts");
const slots = require("../util/slots");
const slotsByPin = require("../util/slotsByPin");
const program = require("commander");

program.option("-a","--available","avaialble slots")
program
  .command('states')
  .description('list down all the states')
  .action(states);
  program
  .command('districts <stateid>')
  .description('Get all districts for state using state id')
  .action(districts);
  program
  .command('slots <districtid>')
  .description('Get all slots for district id')
  .action(slots);

  program
  .command('slotsByPin <pincode>')
  .description('Get all slots for pincode')
  .action(slotsByPin);
  

program.parse();
  