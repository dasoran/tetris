var ctx;
var blockSizeW = 20;
var blockSizeH = 20;

function main () {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  ctx.fillRect(0, 0, 20, 500);
  ctx.fillRect(220, 0, 80, 500);
  ctx.fillRect(20, 0, 200, 80);
  ctx.fillRect(20, 480, 200, 20);

  setInterval(drawLoop, 500);
}


var tetriminoList = [
  {"tetName":"O", "width":2, "height":2, "fillColor":"rgb(255, 212, 0)", "color":"rgb(128, 60, 0)"},
  {"tetName":"I", "width":4, "height":1, "fillColor":"rgb(175, 223, 228)", "color":"rgb(75, 110, 110)"},
  {"tetName":"S", "width":3, "height":2, "fillColor":"rgb(185, 196, 47)", "color":"rgb(85, 93, 20)"},
  {"tetName":"Z", "width":3, "height":2, "fillColor":"rgb(237, 26, 61)", "color":"rgb(110, 12, 30)"},
  {"tetName":"J", "width":3, "height":2, "fillColor":"rgb(0, 154, 214)", "color":"rgb(0, 76, 105)"},
  {"tetName":"L", "width":3, "height":2, "fillColor":"rgb(243, 152, 0)", "color":"rgb(120, 75, 0)"},
  {"tetName":"T", "width":3, "height":2, "fillColor":"rgb(167, 87, 168)", "color":"rgb(80, 42, 82)"},
];
var datas = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [0, 1, 2, 3, 4, 5, 6, -1, -1, -1],
];
var nowX = 0;
var nowY = 0;
var nowBlock;
function drawLoop () {
  ctx.clearRect(20, 80, 200, 400);
  /*
  if (nowBlock == undefined) {
  }
  */
  for (var y=0; y < datas.length; y++) {
    for (var x=0; x < datas[y].length; x++) {
      if (datas[y][x] == -1) continue;
      var fillColor = tetriminoList[datas[y][x]].fillColor;
      var color = tetriminoList[datas[y][x]].color;
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = color;
      drawBlockWithMap(x, y);
    }
  }
}

function drawTetrimino (blockName, mapX, mapY) {
  var offsetX = 20;
  var offsetY = 80;


  switch (blockName) {
    case 'O':
      ctx.fillStyle = "rgb(255, 212, 0)";
      ctx.strokeStyle = "rgb(128, 60, 0)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 20
      );
      break;
    case 'S':
      ctx.fillStyle = "rgb(185, 196, 47)";
      ctx.strokeStyle = "rgb(85, 93, 20)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 40,
        offsetY + tetOffsetY
      );
      break;
    case 'Z':
      ctx.fillStyle = "rgb(237, 26, 61)";
      ctx.strokeStyle = "rgb(110, 12, 30)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 40,
        offsetY + tetOffsetY + 20
      );
      break;
    case 'I':
      ctx.fillStyle = "rgb(175, 223, 228)";
      ctx.strokeStyle = "rgb(75, 110, 110)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 40,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 60,
        offsetY + tetOffsetY
      );
      break;
    case 'J':
      ctx.fillStyle = "rgb(0, 154, 214)";
      ctx.strokeStyle = "rgb(0, 76, 105)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 40
      );
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 40
      );
      break;
    case 'L':
      ctx.fillStyle = "rgb(243, 152, 0)";
      ctx.strokeStyle = "rgb(120, 75, 0)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 40
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 40
      );
      break;
    case 'T':
      ctx.fillStyle = "rgb(167, 87, 168)";
      ctx.strokeStyle = "rgb(80, 42, 82)";

      var tetOffsetX = mapX * blockSizeW;
      var tetOffsetY = mapY * blockSizeH;
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY
      );
      drawBlock(
        offsetX + tetOffsetX,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 20,
        offsetY + tetOffsetY + 20
      );
      drawBlock(
        offsetX + tetOffsetX + 40,
        offsetY + tetOffsetY + 20
      );
      break;
 
    default:
      console.log('error');
  }
}

function drawBlockWithMap (mapX, mapY) {
  var tetOffsetX = mapX * blockSizeW;
  var tetOffsetY = mapY * blockSizeH;
  var offsetX = 20;
  var offsetY = 80;
  var x = tetOffsetX + offsetX;
  var y = tetOffsetY + offsetY;
  drawRect (x, y, blockSizeW, blockSizeH);
}

function drawBlock (x, y) {
  drawRect (x, y, blockSizeW, blockSizeH);
}

function drawRect (x, y, width, height) {
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
}


