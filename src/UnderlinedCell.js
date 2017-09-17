var Cell = require("./Cell.js").Cell;

class UnderlinedCell extends Cell {
  constructor(inner) {
    super("");
    this.inner = inner;
  }

  draw (width, height) {
    return this.inner.draw(width, height - 1)
      .concat([this.repeat("-", width)]);
  }

  minWidth () {
    return this.inner.minWidth();
  }

  minHeight () {
    return this.inner.minHeight() + 1;
  }
}

module.exports = {
  UnderlinedCell: UnderlinedCell
}
