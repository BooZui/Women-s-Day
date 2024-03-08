import { drawHeart } from "./heartEvent/drawHeart.js"
import typeWriter from "./textEvent/typeWriter.js"
import opacity from "./textEvent/opacityEvent.js";

const canvas = document.getElementById('canvas');
const audio = document.querySelector('audio');
const text = document.getElementById('text');
const to = document.getElementById('to');
const happy = document.getElementById('happy');
const from = document.getElementById('from');
const ctx = canvas.getContext('2d');

window.addEventListener('click', () => {
  text.style.display = 'block';
  audio.play();
  canvas.width = 670;
  canvas.height = 625;
  
  const offsetX = canvas.width / 2;
  const offsetY = canvas.height / 2 - 55;
  
  typeWriter(text);
  
  setTimeout(() => {
    drawHeart(ctx, offsetX, offsetY);
  }, 4000);
  
  setTimeout(() => {
    opacity(to);
  }, 8500)
  
  setTimeout(() => {
    opacity(happy);
  }, 9500)
  
  setTimeout(() => {
    opacity(from);
  }, 10500)
})