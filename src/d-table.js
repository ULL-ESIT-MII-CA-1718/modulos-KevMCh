var TCell = require("t-cell");
var RCell = require("r-cell");
var UnderlinedCell = require("underlined-cell");

/**
 * DTable Class.
 */
class DTable {
  constructor () {}

  /**
   * Draw the complete table.
   * @param {json} input json table
   */
  drawAllTable(data) {
    return this.drawTable(this.dataTable(data))
  }

  /**
   * Draw the content of the table.
   * @param {string} input list of rows of the table.
   * @returns {string} rows of table.
   */
  drawTable(rows) {
    var heights = this.rowHeights(rows);
    var widths = this.colWidths(rows);

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

  /**
   * Parse the input json.
   * @param {json} input data in json format
   * @returns {array} all data.
   */
  dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
      return new UnderlinedCell(name);
    });
    var body = data.map(function(row) {
      return keys.map(function(name) {
        var value = row[name];

        if (/^\s*[-+]?\d+([.]\d*)?([eE][-+]?\d+)?\s*$/.test(value))
          return new RCell(String(value));
        else
          return new TCell(String(value));
      });
    });
    return [headers].concat(body);
  }

  /**
   * Get the heights of rows.
   * @param {array} input rows
   * @returns {number} heights of the rows.
   */
  rowHeights(rows) {
    return rows.map(function(row) {
      return row.reduce(function(max, cell) {
        return Math.max(max, cell.minHeight());
      }, 0);
    });
  }

  /**
   * Get the widths of rows.
   * @param {array} input rows
   * @returns {number} widths of the rows.
   */
  colWidths(rows) {
    return rows[0].map(function(_, i) {
      return rows.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth());
      }, 0);
    });
  }
}

module.exports = DTable
