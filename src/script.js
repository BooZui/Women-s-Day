import { drawHeart } from "./heartEvent/drawHeart.js"

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 670;
canvas.height = 625;

const offsetX = canvas.width / 2
const offsetY = canvas.height / 2 - 55

drawHeart(ctx, offsetX, offsetY);