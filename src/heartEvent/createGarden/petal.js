import Vector from "../functions/vector.js";

export default class Petal {
  constructor(pointA, pointB, startAngle, angle, growFactor, bloom) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.startAngle = startAngle;
    this.angle = angle;
    this.growFactor = growFactor;
    this.bloom = bloom;
    this.radius = 1;
    this.isFinished = false;
    this.tanAngleA = bloom.garden.random(-bloom.garden.degrad(bloom.garden.tanAngle), bloom.garden.degrad(bloom.garden.tanAngle))
    this.tanAngleB = bloom.garden.random(-bloom.garden.degrad(bloom.garden.tanAngle), bloom.garden.degrad(bloom.garden.tanAngle))
  }

  draw() {
    let ctx = this.bloom.garden.ctx;
    let v1, v2, v3, v4;
    v1 = new Vector(0, this.radius).rotate(this.bloom.garden.degrad(this.startAngle));
    v2 = v1.clone().rotate(this.bloom.garden.degrad(this.angle));
    v3 = v1.clone().multiply(this.pointA).rotate(this.tanAngleA);
    v4 = v2.clone().multiply(this.pointB).rotate(this.tanAngleB);
    ctx.strokeStyle = this.bloom.color;
    ctx.beginPath();
    ctx.moveTo(v1.x, v1.y);
    ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
    ctx.stroke();
  }

  render() {
    if (this.radius <= this.bloom.radius) {
      this.radius += this.growFactor / 10;
      this.draw();
    } else {
      this.isFinished = true;
    }
  }
}