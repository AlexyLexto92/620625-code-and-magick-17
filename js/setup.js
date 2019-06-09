'use strict';

var setupOpen = document.querySelector('.setup');
setupOpen.classList.remove('hidden');

var setupSimilarOpen = document.querySelector('.setup-similar');
setupSimilarOpen.classList.remove('hidden');

var SimilarList = document.querySelector('.setup-similar-list');

var templateElement = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', ' Юлия', ' Люпита', ' Вашингтон'];
var soName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var cloathColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardProperties = [];

for (var i = 0; i < 4; i++) {
  var wizardElement = templateElement.cloneNode(true);

  wizardProperties[i].name = names[Math.floor(Math.random() * names.length)] + ' ' +
    soName[Math.floor(Math.random() * soName.length)];
  wizardProperties[i].coatColor = cloathColor[Math.floor(Math.random() * cloathColor.length)];
  wizardProperties[i].eyesColor = colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)];
  wizardElement.querySelector('.setup-similar-label').textContent = wizardProperties[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardProperties[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardProperties[i].eyesColor;
  SimilarList.appendChild(wizardElement);
}
