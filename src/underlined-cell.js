var TCell = require("./t-cell");

/**
 * UnderlinedCell Class.
 */
class UnderlinedCell extends TCell {
  constructor(inner) {
    super(inner);
  }

  /**
   * Function to draw a underlined cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  draw (width, height) {
    return this.getContent(width, height)
            .concat(["-".repeat(width)]);
  }
}

module.exports = UnderlinedCell
