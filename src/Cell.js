function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function Cell(text) {
  this.text = text.split("\n");
}

Cell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

Cell.prototype.minHeight = function() {
  return this.text.length;
};

Cell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

module.exports = {
  Cell: Cell,
  repeat: repeat
}
