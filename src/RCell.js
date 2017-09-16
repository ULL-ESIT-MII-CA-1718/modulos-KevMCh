var Cell = require("./Cell.js").Cell;
var repeat = require("./Cell.js").repeat;

function RCell(text) {
  Cell.call(this, text);
}

RCell.prototype = Object.create(Cell.prototype);

RCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};

module.exports = {
  RCell: RCell
}
