var TCell = require("t-cell");

class RCell extends TCell {
  constructor(text) {
    super(text);
  }

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
