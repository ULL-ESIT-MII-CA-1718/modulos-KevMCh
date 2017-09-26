## Eloquent JavaScript. Chapter 6: The Secret Life of Objects.  Section *Laying out a table*

[![Build Status](https://travis-ci.org/ULL-ESIT-MII-CA-1718/modulos-KevMCh.svg?branch=master)](https://travis-ci.org/ULL-ESIT-MII-CA-1718/modulos-KevMCh)
[![npm version](https://badge.fury.io/js/%40kevmch%2Foop.svg)](https://badge.fury.io/js/%40kevmch%2Foop)

#### Introduction
Example corresponds to the section **Laying out a table** of Chapter 6 **[The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)**, book **[Eloquent javaScript](http://eloquentjavascript.net/)**

#### Files:
```
package.json          - configuration and dependencies

gulpfile.js           - test: run mocha tests
                      - debugger: run the debbugger
                      - run: run the program
                      - documentation: create the documentation (documentation.js)
                      - jsdoc: create the documentation (jsdoc)
                      - docco: create the documentation (docco)

src                   - source folder
  input.json          - input file
  main.js             - main program
  Cell.js             - class cell
  RCell.js            - class rcell
  UnderlinedCell.js   - class underlinedcell
  Table.js            - class table

test                  - mocha test
  test.js
```

#### Description
This example consist in a program that, given an array of arrays of table cells in json format, builds up a string that contains a nicely laid out table.

The *src* folder has the different classes, all types of cell and the table. The *test* folder has the file the file with the developed tests, and in the *examples* folder has the input file and a main program.

#### Usage

**Installation**

To install the module it is necessary to execute the following command.
```shell
$ npm install @kevmch/oop
```

The module exports a table class and can be used by creating an instance of this. The instance uses a json array like the following.

**Example of input used:**
```javascript
~/modulos-KevMCh $ cat src/input.json

[
  {"name": "Kilimanjaro\nMontaña mágica", "height": 5895, "country": "Tanzania"},
  {"name": "Everest", "height": 8848, "country": "Nepal\nPaís lejano"},
  {"name": "Mount Fuji", "height": 3776, "country": "Japan"},
  {"name": "Mont Blanc", "height": 4808, "country": "Italy/France"},
  {"name": "Vaalserberg", "height": 323, "country": "Netherlands"},
  {"name": "Denali", "height": 6168, "country": "United States"},
  {"name": "Popocatepetl", "height": 5465, "country": "Mexico"}
]
```

Usage mode is as follows.
```javascript
var input = require("./input.json");
var DTable = require("@kevmch/oop");

var table = new DTable();
console.log(table.drawAllTable(input));
```

**Gulp tasks:**

If you want to test the code the different tasks is available in the gulp file.

  * Run the program with the debugger.
  * Run the program with the standard input.
  * Run the tests.
  * Create the documentation with the documentation.js module.
  * Create the documentation with the jsdoc module.
  * Create the documentation with the docco module.

**Example:**
```javascript
~/modulos-KevMCh $ gulp run
[12:42:05] Using gulpfile ~/modulos-KevMCh/gulpfile.js
[12:42:05] Starting 'run'...
name           height country      
-------------- ------ -------------
Kilimanjaro      5895 Tanzania     
Montaña mágica                     
Everest          8848 Nepal        
                      País lejano  
Mount Fuji       3776 Japan        
Mont Blanc       4808 Italy/France
Vaalserberg       323 Netherlands  
Denali           6168 United States
Popocatepetl     5465 Mexico       
[12:42:05] Finished 'run' after 84 ms
```

#### Persona Data
* *[My GitHub Page](https://kevmch.github.io/)*

* *[GitHub Course Page](https://ull-esit-mii-ca-1718.github.io/docs/index.html)*
