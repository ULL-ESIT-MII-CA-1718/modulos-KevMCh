var should = require('should');
var assert = require('better-assert');

var TCell = require("../src/t-cell");
var RCell = require("../src/r-cell");
var UnderlinedCell = require("../src/underlined-cell");
var Table = require("../src/d-table");

/**********************/
/*        Cell        */
/**********************/

var valueCell = "rows 1\nrows 2\nrows 3\nrows 4";
var expectedCell = ['rows 1', 'rows 2', 'rows 3', 'rows 4'];
var widthCell = 6, heightCell = 4;

describe("Cell", function() {
  it("Creation of Cells", function() {
    var cell = new TCell(valueCell);

    assert(widthCell === cell.minWidth());
    assert(heightCell === cell.minHeight());
    assert(JSON.stringify(cell.text) == JSON.stringify(expectedCell));
  })
});

/**********************/
/*        RCell       */
/**********************/

describe("RCell", function() {
  it("Creation of RCells", function() {
    var rCell = new RCell(valueCell);

    should(rCell instanceof TCell).be.exactly(true);
    should(rCell instanceof RCell).be.exactly(true);
  })
});

/**********************/
/*   UnderlinedCell   */
/**********************/

var valueUnderlinedCell = "Title";
var expectedUnderlinedCell = ['Title', '-----' ];
var widthUnderlinedCell = 5, heightUnderlinedCell = 1;

describe("UnderlinedCell", function() {
  it("Creation of UnderlinedCells", function() {
    var underlinedCell = new UnderlinedCell(valueUnderlinedCell);

    assert(widthUnderlinedCell === underlinedCell.minWidth());
    assert(heightUnderlinedCell === underlinedCell.minHeight());
    assert(
      JSON.stringify(underlinedCell.draw(underlinedCell.minWidth(), underlinedCell.minHeight())) ==
      JSON.stringify(expectedUnderlinedCell)
    );
  })
});


/**********************/
/*        Table       */
/**********************/

var table = new Table();

function checkerboard() {
  var rows = [];
  for (var i = 0; i < 5; i++) {
     var row = [];
     for (var j = 0; j < 5; j++) {
       row.push(new TCell(((j+i)%2)? " " : "##"));
     }
     rows.push(row);
  }
  return rows;
}

var expectedCheckerboard =
`##    ##    ##
   ##    ##
##    ##    ##
   ##    ##
##    ##    ##`;

describe("Checkerboard", function() {
  it("Draw the checkerboard", function() {
    table.drawTable(checkerboard()).should.match(/^(([# ]{2}(\s|$)){5}){5}$/);
  })
});

var INPUT = [
  {name: "Kilimanjaro\nMontaña mágica", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal\nPaís lejano"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var expected =
`name           height country
-------------- ------ -------------
Kilimanjaro      5895 Tanzania
Montaña mágica
Everest          8848 Nepal
                      País lejano
Mount Fuji       3776 Japan
Mont Blanc       4808 Italy/France
Vaalserberg       323 Netherlands
Denali           6168 United States
Popocatepetl     5465 Mexico       `;

var col1w = 14, col2w = 6, col3w = 11;
describe("DrawAllTable", function() {
  it("Draw the mountains table", function() {
    var result = table.drawAllTable(INPUT);

    result.should.match(/^(.{14}\s.{6}\s.{13}\s*){11}$/);
    result.should.match(/Montaña mágica\s{20}/);
  })
});
