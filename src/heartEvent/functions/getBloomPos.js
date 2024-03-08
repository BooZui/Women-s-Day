export default function starHeartAinmoation(garden, offsetX, offsetY) {
  const interval = 50;
  let angle = 10;
  let heart = new Array();

  const animationTimer = setInterval(() => {
    let bloom = getHeartPoint(angle, offsetX, offsetY);
    let draw = true;

    for (let i = 0; i < heart.length; i++) {
      let pos = heart[i];
      let distance = Math.sqrt(Math.pow(pos[0] - bloom[0], 2) + Math.pow(pos[1] - bloom[1], 2));

      if (distance < garden.bloomRadius.max) {
        draw = false;
        break;
      }
    }

    if (draw) {
      heart.push(bloom);
      garden.createRandomBloom(bloom[0], bloom[1]);
    }

    if (angle >= 30) {
      clearInterval(animationTimer);
    } else {
      angle += 0.2;
    }
  }, interval)
}

function getHeartPoint(angle, offsetX, offsetY) {
  const t = angle / Math.PI;
  const x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
  const y = -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return new Array(offsetX + x, offsetY + y);
}