/**
 * TCell Class.
 */
 class TCell {
  constructor(text) {
    this.text = text.split("\n");
  }

  /**
   * Function to draw a cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  draw(width, height) {
    return this.getContent(width, height);
  };

  /**
   * Get the content of a cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  getContent(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
    }

    return result;
  }

  /**
   * Get the min width of a cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  minWidth() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  /**
   * Get the min height cell.
   * @param {number} input width of the cell.
   * @param {number} input height of the cell.
   */
  minHeight() {
    return this.text.length;
  };
}

module.exports = TCell
