import Garden from "./createGarden/garden.js";
import starHeartAinmoation from "./functions/getBloomPos.js";

export function drawHeart(ctx, offsetX, offsetY) {
  const garden = new Garden(ctx);

  starHeartAinmoation(garden, offsetX, offsetY)

  setInterval(() => {
    garden.render();
  }, garden.growSpeed);
  
}