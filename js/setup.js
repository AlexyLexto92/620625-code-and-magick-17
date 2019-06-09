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
/*
var wizardProperties = [{
    name: names[Math.floor(Math.random() * names.length)] + ' ' + soName[Math.floor(Math.random() * soName.length)],
    coatColor: cloathColor[Math.floor(Math.random() * cloathColor.length)],
    eyesColor: colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)]
  },
  {
    name: names[Math.floor(Math.random() * names.length)] + ' ' + soName[Math.floor(Math.random() * soName.length)],
    coatColor: cloathColor[Math.floor(Math.random() * cloathColor.length)],
    eyesColor: colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)]
  },
  {
    name: names[Math.floor(Math.random() * names.length)] + ' ' + soName[Math.floor(Math.random() * soName.length)],
    coatColor: cloathColor[Math.floor(Math.random() * cloathColor.length)],
    eyesColor: colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)]
  },
  {
    name: names[Math.floor(Math.random() * names.length)] + ' ' + soName[Math.floor(Math.random() * soName.length)],
    coatColor: cloathColor[Math.floor(Math.random() * cloathColor.length)],
    eyesColor: colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)]
  },
];
*/
var wizardProperties = [];

function generateWizards(targetArray, count) {
  for (var i = 0; i < count; i++) {
    var objectProperties = {};
    objectProperties.name = names[Math.floor(Math.random() * names.length)] + ' ' + soName[Math.floor(Math.random() * soName.length)];
    objectProperties.coatColor = cloathColor[Math.floor(Math.random() * cloathColor.length)];
    objectProperties.eyesColor = colorOfEyes[Math.floor(Math.random() * colorOfEyes.length)];
    targetArray.push(objectProperties);
  }
  return targetArray;
}
generateWizards(wizardProperties, 4);
/*
for (var i = 0; i < wizardProperties.length; i++) {
  var wizardElement = templateElement.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardProperties[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardProperties[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardProperties[i].eyesColor;
  SimilarList.appendChild(wizardElement);
}
*/
  var renderWizard = function (wizardProperties) {
    var wizardElement = templateElement.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardProperties.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardProperties.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardProperties.eyesColor;
    return wizardElement;
  }



  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardProperties.length; i++) {
    fragment.appendChild(renderWizard(wizardProperties[i]));
  }
  SimilarList.appendChild(fragment);

