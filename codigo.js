var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';


var myImages = document.querySelectorAll('img');
myImages.forEach((myImage, i) => {
    var originalsrc = myImage.getAttribute('src');
    myImage.onclick = function () {
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'imagesprueba/girldiving.png' || mySrc === 'imagesprueba/reglamentacion.png' || mySrc === 'imagesprueba/equipment.png') {
            myImage.setAttribute('src', 'imagesprueba/insideocean.jpg');
        } else {
            myImage.setAttribute('src', originalsrc);
        }
    }
});

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Eres el mejor, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }