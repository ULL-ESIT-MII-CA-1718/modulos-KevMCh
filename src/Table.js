var UnderlinedCell = require("./UnderlinedCell.js").UnderlinedCell;
var Cell = require("./Cell.js").Cell;
var RCell = require("./RCell.js").RCell;

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new Cell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];

      if (/^\s*[-+]?\d+([.]\d*)?([eE][-+]?\d+)?\s*$/.test(value))
        return new RCell(String(value));
      else
        return new Cell(String(value));
    });
  });
  return [headers].concat(body);
}

function drawAllTable(data) {
  return drawTable(dataTable(data));
}

module.exports = {
  drawAllTable: drawAllTable
}
