'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;
var colors = ['#3F3FBF', '#BDBDD5', '#75757A'];
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getmaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X+10, CLOUD_Y+10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = 'bold FONT_GAP PT Mono';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 60);
  var maxTime = getmaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = 'bold FONT_GAP PT Mono';
    ctx.fillText(names[i], CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT, TEXT_WIDTH);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = colors[i];
    }
    ctx.fillRect(CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.font = 'bold FONT_GAP PT-Mono';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_GAP * 2, TEXT_WIDTH);
  }
};
