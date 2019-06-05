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
var colors = ['rgba(255, 0, 0, 1)', '#3F3FBF', '#BDBDD5', '#75757A'];
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

var getBarColor = function (arr) {
  for (var i = 0; i <= arr.length; i++) {
    var color = arr[i];
  }
  return color;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = 'bold FONT_GAP PT Mono';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 60);
  var maxTime = getmaxElement(times);
  var BarColor = getBarColor(colors);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = 'bold FONT_GAP PT Mono';
    ctx.fillText(players[i], CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT, TEXT_WIDTH);
    ctx.fillStyle = BarColor;
    ctx.fillRect(CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.font = 'bold FONT_GAP PT-Mono';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_DISTANCE + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_GAP * 2, TEXT_WIDTH);
  }
};
