'use strict';

var setupSimilarOpen = document.querySelector('.setup-similar');
setupSimilarOpen.classList.remove('hidden');

var SimilarList = document.querySelector('.setup-similar-list');
var templateElement = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', ' Юлия', ' Люпита', ' Вашингтон'];
var soName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var cloathColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var renderWizard = function (Properties) {
  var wizardElement = templateElement.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = Properties.name;
  wizardElement.querySelector('.wizard-coat').style.fill = Properties.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = Properties.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardProperties.length; i++) {
  fragment.appendChild(renderWizard(wizardProperties[i]));
}
SimilarList.appendChild(fragment);


// 4 Обработка событий

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var buttonOpenSetup = document.querySelector('.setup-open');
var setupPopup = document.querySelector('.setup');
var buttonCloseSetup = setupPopup.querySelector('.setup-close');
//  присваивание tabindex=0 для кнопки закрытия окна
buttonCloseSetup.setAttribute('tabindex', 0);
var buttonOpenSetupIcon = document.querySelector('.setup-open-icon');
buttonOpenSetupIcon.setAttribute('tabindex', 0);
var setupUserName = setupPopup.querySelector('.setup-user-name');
//  задаём форме атрибут minlength
setupUserName.setAttribute('minlength', 2);
var setupForm = setupPopup.querySelector('.setup-wizard-form');
//  задаём форме атрибут action
setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
//  весь волшебник
var setupWizard = setupPopup.querySelector('.setup-player');
//  цвет мантии
var wizardCoat = setupWizard.querySelector('.wizard-coat');
// цвет глаз
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
//  цвет фаербола
var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
// input мантии по имени
var wizardCoatInput = setupWizard.querySelector('input[name="coat-color"]');
// input глаз по имени
var wizardEyesInput = setupWizard.querySelector('input[name="eyes-color"]');
// input файрбола по имени
var wizardFireballInput = setupWizard.querySelector('input[name="fireball-color"]');

// функция рандомных цветов из массива
function randomColor(intArray) {
  var randColor = intArray[Math.floor(Math.random() * intArray.length)];
  return randColor;
}
var setupPopupTop;
var setupPopupLeft;
var artifactsItemTop;
var artifactsItemLeft;
//  изменение цвета мантии по клику
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = randomColor(cloathColor);
  wizardCoatInput.value = randomColor(cloathColor);
});
//  изменение цвета глаз по клику
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = randomColor(colorOfEyes);
  wizardEyesInput.value = randomColor(colorOfEyes);
});
//  изменение цвета фаейрбола по клику
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = randomColor(fireballColor);
  wizardFireballInput.value = randomColor(fireballColor);
});

//  реализация открытия окна через щелчек мыши на buttonOpenSetup
buttonOpenSetup.addEventListener('click', function () {
  setupPopup.classList.remove('hidden');
  //  реализация сбора данных сразу после открытия окна
  setupPopupTop = setupPopup.offsetTop;
  setupPopupLeft = setupPopup.offsetLeft;
  artifactsItemTop = artifactsItem.offsetTop;
  artifactsItemLeft = artifactsItem.offsetLeft;
});
//  реализация открытия окна через нажатие кнопоки Enter при фокусе на buttonOpenSetupIcon
buttonOpenSetup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupPopup.classList.remove('hidden');
    //  реализация сбора данных сразу после открытия окна
    setupPopupTop = setupPopup.offsetTop;
    setupPopupLeft = setupPopup.offsetLeft;
    artifactsItemTop = artifactsItem.offsetTop;
    artifactsItemLeft = artifactsItem.offsetLeft;
  }
});

//  функция возвращает исходные координаты полученные при первом открытии окна и обнуляет изменения
function setDefaulPositionSetup() {
  setupPopup.style.top = setupPopupTop + 'px';
  setupPopup.style.left = setupPopupLeft + 'px';
}

function setDefaulPositionStar() {
  artifactsItem.style.top = artifactsItemTop + 'px';
  artifactsItem.style.left = artifactsItemLeft + 'px';
}

//  реализация закрытия окна через нажатие кнопоки ESC
document.addEventListener('keydown', function (evt) {
  //  проверяем setupUserName- елемент ли сейчас в фокусе
  if (document.activeElement === setupUserName) {
    //  если да -- не делаем ничего
  } else if (evt.keyCode === ESC_KEYCODE) {
    //  если нет-закрываем окно
    setupPopup.classList.add('hidden');
    //  при закрытии функция возвращает исходные координаты и обнуляет изменения
    setDefaulPositionSetup();
    setDefaulPositionStar();
  }
});


//  реализация закрытия окна через щелчек мыши на buttonCloseSetup
buttonCloseSetup.addEventListener('click', function () {
  setupPopup.classList.add('hidden');
  //  при закрытии функция возвращает исходные координаты и обнуляет изменения
  setDefaulPositionSetup();
  setDefaulPositionStar();
});

//  реализация закрытия окна через нажатие кнопоки Enter при фокусе на buttonCloseSetup
buttonCloseSetup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupPopup.classList.add('hidden');
    //  при закрытии функция возвращает исходные координаты и обнуляет изменения
    setDefaulPositionSetup();
    setDefaulPositionStar();
  }
});
//  реализация перетаскивания диалогового окна
(function () {
  //  сcылка на елемент для захвата
  var dialogHandle = setupPopup.querySelector('.upload');
  //  событие захвата
  dialogHandle.addEventListener('mousedown', function (evt) {

    evt.preventDefault();
    //  координаты точки с которой мы начали перемещать попап
    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;
    //  событие перетаскивания
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;


      //  расстояние на которое пеетянули курсор
      var shift = {
        x: startCoordinats.x - moveEvt.clientX,
        y: startCoordinats.y - moveEvt.clientY
      };

      startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      //  координаты перетянутого попапа
      setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
      setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtO) {
          evtO.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };
    //  обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

//  блок магазина артефактов
var artifactsShop = document.querySelector('.setup-artifacts-shop');
//  блок обертки артефактов
var artifactsSell = artifactsShop.querySelector('.setup-artifacts-cell');
//  блок  артефакта
var artifactsItem = artifactsSell.querySelector('img');
artifactsItem.style.position = 'absolute';
artifactsItem.style.zIndex = '1';

(function () {
  //  реализация перетаскивания предметов из магазина врюкзак


  // минимальные координаты по ширине  за которые не может выходить звезда
  var minPositionStarCoordinatsX = 0;
  //  максимвльные координаты по ширине  за которые не может выходить звезда
  var maxPositionStarCoordinatsX = setupPopup.offsetWidth - artifactsItem.offsetWidth;
  // минимальные координаты по высоте  за которые не может выходить звезда
  var minPositionStarCoordinatsY = 0;
  //  максимвльные координаты по высоте  за которые не может выходить звезда
  var maxPositionStarCoordinatsY = setupPopup.offsetHeight - artifactsItem.offsetHeight;
  //  навешиваем событие захвата на артефакт  удаляя у него дефолтное событие
  artifactsItem.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    //  определяем координаты захвата миши
    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };
    //  событие перетаскивания
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      //   расстояние на которое перетянули курсор
      var shift = {
        x: startCoordinats.x - moveEvt.clientX,
        y: startCoordinats.y - moveEvt.clientY
      };

      startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      var positionStarY = artifactsItem.offsetTop - shift.y;
      if (positionStarY >= minPositionStarCoordinatsY && positionStarY <= maxPositionStarCoordinatsY) {
        artifactsItem.style.top = positionStarY + 'px';
      }
      var positionStarX = artifactsItem.offsetLeft - shift.x;
      if (positionStarX >= minPositionStarCoordinatsX && positionStarX <= maxPositionStarCoordinatsX) {
        artifactsItem.style.left = positionStarX + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      //  останавливаем событие
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    //  обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
