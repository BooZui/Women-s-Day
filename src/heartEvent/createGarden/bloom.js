import Petal from "./petal.js";

export default class Bloom {
  constructor(Pos, radius, color, petalCount, garden) {
    this.Pos = Pos;
    this.radius = radius;
    this.color = color;
    this.petalCount = petalCount;
    this.garden = garden;
    this.petals = [];
    this.init();
    this.garden.addBloom(this);
  }

  draw() {
    let petal,
      isFinished = true;

    this.garden.ctx.save();
    this.garden.ctx.translate(this.Pos.x, this.Pos.y);

    for (let i = 0; i < this.petals.length; i++) {
      petal = this.petals[i];
      petal.render();
      isFinished *= petal.isFinished;
    }

    this.garden.ctx.restore();

    if (isFinished) {
      this.garden.removeBloom(this);
    }
  }

  init() {
    const angle = 360 / this.petalCount;
    const strartAngle = this.garden.randomInt(0, 90);

    for (let i = 0; i < this.petalCount; i++) {
      this.petals.push(new Petal(
        this.garden.random(this.garden.petalControlPoint.min, this.garden.petalControlPoint.max),
        this.garden.random(this.garden.petalControlPoint.min, this.garden.petalControlPoint.max),
        strartAngle + i * angle,
        angle,
        this.garden.random(this.garden.growFactor.min, this.garden.growFactor.max),
        this
      ));
    }
  }
}
