class TCell {
  constructor(text) {
    this.text = text.split("\n");
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + this.repeat(" ", width - line.length));
    }
    return result;
  };

  repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
      result += string;
    return result;
  }

  minWidth() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  minHeight() {
    return this.text.length;
  };
}

module.exports = TCell
