
// Add variables outside this function

const colorButton = document.querySelector("#color-generator-btn");
colorButton.addEventListener("click", e => {
  window.redValue = Math.floor(Math.random() * 256);
  // console.log(redValue);
  window.greenValue = Math.floor(Math.random() * 256);
  // console.log(greenValue);
  window.blueValue = Math.floor(Math.random() * 256);
  // console.log(blueValue);
  let boxColor =
    "rgb(" +
    window.redValue +
    "," +
    window.greenValue +
    "," +
    window.blueValue +
    ")";
  console.log(boxColor);
  document.getElementById("color-box").style.backgroundColor = boxColor;
  
});

// Red Slider
var redSlider = document.getElementById("redValueSlider");
var redSliderValue = redSlider.value;
var redOutput = document.getElementById("redOutput");
redOutput.innerHTML = "Red: " + redSliderValue;

redSlider.addEventListener("input", e => {
  redSliderValue = redSlider.value;
  console.log("hello there my pretty")
  console.log(redSliderValue)
  redOutput.innerHTML = "Red: " + redSliderValue;

})

// Update the current slider value (each time you drag the slider handle)
// redSlider.oninput = function() {
//   redSliderValue = this.value;
//   redOutput.innerHTML = "Red: " + redSliderValue;
// };

// Green Slider
var greenSlider = document.getElementById("greenValueSlider");
var greenSliderValue = greenSlider.value;
var greenOutput = document.getElementById("greenOutput");
greenOutput.innerHTML = "Green: " + greenSliderValue;

greenSlider.oninput = function() {
  greenSliderValue = this.value;
  greenOutput.innerHTML = "Green: " + greenSliderValue;
};

// blue Slider
var blueSlider = document.getElementById("blueValueSlider");
var blueSliderValue = blueSlider.value;
var blueOutput = document.getElementById("blueOutput");
blueOutput.innerHTML = "Blue: " + blueSliderValue;
blueSlider.oninput = function() {
  blueSliderValue = this.value;
  blueOutput.innerHTML = "Blue: " + blueSliderValue;
};

const hintMessage = document.querySelector("#hintHeader");
const hintButton = document.querySelector("#hintButton");

const checkButton = document.querySelector("#check-btn");
let count = 0;

checkButton.addEventListener("click", e => {
  let checkBoxColor ="rgb(" + redSliderValue +"," + greenSliderValue +"," +blueSliderValue +")";
  document.getElementById("check-color-box").style.backgroundColor = checkBoxColor;
  document.getElementById("check-color-box").width = "150px";
  document.getElementById("check-color-box").height = "150px";
  hintMessage.innerHTML = `<h3>Would you like a hint?</h3>`;
  hintButton.innerHTML = `<button>CLICK FOR HINT</button>`;
  checkButton.innerHTML = `<button style="background-color:#DDDC2A; font-family: 'Open Sans', sans-serif;"> Move Sliders and Check Again</button>`;
   count += 1;
  
    if (count == 4){
    answerHeader.innerHTML = `<h3>Do you want the answer?</h3>`
     answerButton.innerHTML = `<button style="background-color:#DDDC2A; font-family: 'Open Sans', sans-serif;"> Click here for answer</button>`;
  }
});

const checkAnswerRed = document.querySelector("#checkAnswerRed");
const checkAnswerGreen = document.querySelector("#checkAnswerGreen");
const checkAnswerBlue = document.querySelector("#checkAnswerBlue");

const howFarAwayRed = document.querySelector("#howFarAwayRed");
const howFarAwayGreen = document.querySelector("#howFarAwayGreen");
const howFarAwayBlue = document.querySelector("#howFarAwayBlue");



const answerHeader=document.querySelector("#answerHeader");
const answerButton=document.querySelector("#answerButton");
const answer =document.querySelector("#answer");

hintButton.addEventListener("click", e => {
  
hintMessage.innerHTML = `<h3>Change the sliders, check answer and then click for hint</h3>`;
hintButton.innerHTML = `<button> CLICk TO CHECK</button>`;
  
  if (Math.abs(window.redValue - redSliderValue < 20)) {
    howFarAwayRed.innerHTML = `<h3>red is close ➡️</h3>`;
  } else if (Math.abs(window.redValue - redSliderValue < 100)) {
    howFarAwayRed.innerHTML = `<h3>red is kinda far ➡️</h3>`;
  } else {
    howFarAwayRed.innerHTML = `<h3>red is pretty far ➡️</h3>`;
  }

  if (Math.abs(window.greenValue - greenSliderValue < 20)) {
    howFarAwayGreen.innerHTML = `<h3>green is close ➡️</h3>`;
  } else if (Math.abs(window.greenValue - greenSliderValue < 100)) {
    howFarAwayGreen.innerHTML = `<h3>green is kinda far ➡️</h3>`;
  } else {
    howFarAwayGreen.innerHTML = `<h3>green is pretty far ➡️</h3>`;
  }

  if (Math.abs(window.blueValue - blueSliderValue < 20)) {
    howFarAwayBlue.innerHTML = `<h3>blue is close ➡️</h3>`;
  } else if (Math.abs(window.blueValue - blueSliderValue < 100)) {
    howFarAwayBlue.innerHTML = `<h3>blue is kinda far ➡️</h3>`;
  } else {
    howFarAwayBlue.innerHTML = `<h3>blue is pretty far ➡️</h3>`;
  }

  if (window.redValue - redSliderValue > 0) {
    checkAnswerRed.innerHTML = `<h3>Add <u>MORE</u> red</h3>`;
  } else if (window.redValue - redSliderValue < 0) {
    checkAnswerRed.innerHTML = `<h3>Add <u>LESS</u> red</h3>`;
  } else if (window.redValue - redSliderValue == 0) {
    checkAnswerRed.innerHTML = `<h3>OMG, PERFECT RED!</h3>`;
  }

  if (window.greenValue - greenSliderValue > 0) {
    checkAnswerGreen.innerHTML = `<h3>Add <u>MORE</u> green</h3>`;
  } else if (window.greenValue - greenSliderValue < 0) {
    checkAnswerGreen.innerHTML = `<h3>Add <u>LESS</u> green</h3>`;
  } else if (window.greenValue - greenSliderValue == 0) {
    checkAnswerGreen.innerHTML = `<h3>OMG, PERFECT GREEN!</h3>`;
  }

  if (window.blueValue - blueSliderValue > 0) {
    checkAnswerBlue.innerHTML = `<h3>Add <u>MORE</u> blue</h3>`;
  } else if (window.blueValue - blueSliderValue < 0) {
    checkAnswerBlue.innerHTML = `<h3>Add <u>LESS</u> blue</h3>`;
  } else if (window.blueValue - blueSliderValue == 0) {
    checkAnswerBlue.innerHTML = `<h3>OMG, PERFECT BLUE!</h3>`;
  }
  
  

});

answerButton.addEventListener("click", e=>{
  answer.innerHTML=`<h4>red: ${window.redValue}  <br>green: ${window.greenValue} <br>blue: ${window.blueValue} </h4>`
})