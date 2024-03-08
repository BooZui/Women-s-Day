export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  rotate(angle) {
    let x = this.x;
    let y = this.y;
    this.x = x * Math.cos(angle) - y * Math.sin(angle);
    this.y = x * Math.sin(angle) + y * Math.cos(angle);
    return this;
  }

  multiply(k) {
    this.x *= k;
    this.y *= k;
    return this;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}