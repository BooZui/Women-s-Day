import Bloom from "./bloom.js";
import Vector from "../functions/vector.js";

export default class Garden {
  constructor(ctx) {
    this.ctx = ctx;
    this.blooms = [];
    this.petalCount = {
      min: 8,
      max: 15,
    };
    this.petalControlPoint = {
      min: 0.1,
      max: 3,
    };
    this.growFactor = {
      min: 0.1,
      max: 1,
    };
    this.bloomRadius = {
      min: 8,
      max: 10,
    };
    this.growSpeed = 1000 / 600;
    this.color = {
      rmin: 128,
      rmax: 255,
      gmin: 0,
      gmax: 128,
      bmin: 0,
      bmax: 128,
      opacity: 0.01,
    };
    this.tanAngle = 40;
    this.circle = 2 * Math.PI;
  }

  render() {
    for (let i = 0; i < this.blooms.length; i++) {
      this.blooms[i].draw();
    }
  }

  addBloom(bloom) {
    this.blooms.push(bloom);
  }

  removeBloom(bloomTargt) {
    let bloom;

    for (let i = 0; i < this.blooms.length; i++) {
      bloom = this.blooms[i];
      if (bloom === bloomTargt) {
        this.blooms.splice(i, 1);
        return this;
      }
    }
  }

  createRandomBloom(x, y) {
    this.createBloom(
      x,
      y,
      this.randomInt(this.bloomRadius.min, this.bloomRadius.max),
      this.randomRgba(this.color.rmin, this.color.rmax, this.color.gmin, this.color.gmax, this.color.bmin, this.color.bmax, this.color.opacity),
      this.randomInt(this.petalCount.min, this.petalCount.max)
      );
  }

  createBloom(x, y, radius, color, petalCount) {
    new Bloom(new Vector(x, y), radius, color, petalCount, this);
  }

  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  degrad(angle) {
    return angle * this.circle / 360;
  }

  raddeg(angle) {
    return angle * 360 / this.circle;
  }

  rgba(r, g, b, a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  randomRgba(rmin, rmax, gmin, gmax, bmin, bmax, a) {
    let r = Math.round(this.random(rmin, rmax));
    let g = Math.round(this.random(gmin, gmax));
    let b = Math.round(this.random(bmin, bmax));
    const limit = 5;

    if (Math.abs(r - g) <= limit && Math.abs(g - b) <= limit && Math.abs(b - r) <= limit) {
      return this.randomRgba(rmin, rmax, gmin, gmax, bmin, bmax, a);
    } else {
      return this.rgba(r, g, b, a);
    }
  }
}
