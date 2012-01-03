var ctx;

function main () {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  ctx.fillRect(0, 0, 20, 500);
  ctx.fillRect(220, 0, 80, 500);
  ctx.fillRect(20, 0, 200, 80);
  ctx.fillRect(20, 480, 200, 20);
  drawTetrimino('o', 2, 3);
}

function drawTetrimino (blockName, mapX, mapY) {
  var offsetX = 20;
  var offsetY = 80;
  var blockSizeW = 20;
  var blockSizeH = 20;
  ctx.fillStyle = "rgb(255, 212, 0)";
  ctx.strokeStyle = "rgb(128, 60, 0)";

  var tetOffsetX = mapX * blockSizeW;
  var tetOffsetY = mapY * blockSizeH;
  drawBlock(offsetX + tetOffsetX, offsetY + tetOffsetY, blockSizeW, blockSizeH);
  drawBlock(offsetX + tetOffsetX + 20, offsetY + tetOffsetY, blockSizeW, blockSizeH);
  drawBlock(offsetX + tetOffsetX + 20, offsetY + tetOffsetY + 20, blockSizeW, blockSizeH);
  drawBlock(offsetX + tetOffsetX, offsetY + tetOffsetY + 20, blockSizeW, blockSizeH);
}

function drawBlock (x, y, width, height) {
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
}


