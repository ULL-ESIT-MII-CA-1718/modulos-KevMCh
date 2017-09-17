var Cell = require("./Cell.js").Cell;

class RCell extends Cell {
  constructor(text) {
    super(text);
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(this.repeat(" ", width - line.length) + line);
    }
    return result;
  }
}

module.exports = {
  RCell: RCell
}
