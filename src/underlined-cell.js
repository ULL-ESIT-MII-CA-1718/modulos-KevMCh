var TCell = require("t-cell");

class UnderlinedCell extends TCell {
  constructor(inner) {
    super(inner);
    this.inner = inner;
  }

  draw (width, height) {
    return this.getContent(width, height)
            .concat([this.repeat("-", width)]);
  }
}

module.exports = UnderlinedCell
