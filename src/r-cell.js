var TCell = require("t-cell");

/**
 * RCell Class.
 */
class RCell extends TCell {
  constructor(text) {
    super(text);
  }

  /**
   * Function to draw a right cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat(width - line.length) + line);
    }
    return result;
  }
}

module.exports = RCell
