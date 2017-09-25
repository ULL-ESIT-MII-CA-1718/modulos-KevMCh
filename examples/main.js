/**
 * Main program
 */
var input = require("./input.json");
var DTable = require("../src/d-table");

debugger;

var table = new DTable();
console.log(table.drawAllTable(input));
