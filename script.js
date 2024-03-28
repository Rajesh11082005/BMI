const PAGES = document.getElementById("pages");
const HEIGHT = document.getElementById("height");
const WEIGHT = document.getElementById("weight-counter");
const TYPE = document.getElementById("type");
const BMIVALUE = document.getElementById("bmi");
const MSG = document.getElementById("msg");
const MALE = document.getElementById("male");
const FEMALE = document.getElementById("female");
const CALC = document.getElementById("calculate");
const PAGE2 = document.getElementById("page2");

var height = parseFloat(HEIGHT.value);
var weight = parseFloat(WEIGHT.value);

console.log(height, weight);

var pagechange = true;

function reset(){
    BMIVALUE.innerHTML = "------kg/m<sup>2</sup>";
    TYPE.innerHTML = "-----";
    MSG.innerHTML = "----";
    PAGE2.style.color = "black";
}
function changePage() {
    if (pagechange) {
        PAGES.style.transform = "translateX(-54%)";
        CALC.innerHTML = "Calculate Again";
    } else {
        PAGES.style.transform = "translateX(-4.3%)";
        CALC.innerHTML = "Calculate";
        reset();
    }
    pagechange = !pagechange;
}

function calculate() {
    height = parseFloat(HEIGHT.value);
    weight = parseFloat(WEIGHT.value);
    
    if (height > 0.0 && weight > 0.0 && (MALE.checked || FEMALE.checked)) {
        var bmi = weight / ((height / 100) ** 2); // Convert height to meters
        BMIVALUE.innerHTML = " <br> "+bmi.toFixed(2)+"kg/m<sup>2<sup>";
        BMIVALUE.innerHTML = MALE.checked ? "Male " + BMIVALUE.innerHTML : "Female " + BMIVALUE.innerHTML;

        if (bmi <= 18.5) {
            TYPE.innerHTML = "Underweight";
            MSG.innerHTML = "Be careful of your health."
            MSG.style.color = "black";
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
        } else if (bmi <=25) {
            TYPE.innerHTML = "Normal";
            MSG.innerHTML = "You are healthy."
            BMIVALUE.style.color = "green";
            TYPE.style.color = "green";
            MSG.style.color = "black";
        } else if (bmi <= 30) {
            TYPE.innerHTML = "Overweight";
            MSG.innerHTML = "Be careful of your health."
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
            MSG.style.color = "black";
        } else if (bmi <= 35) {
            TYPE.innerHTML = "Obese Class I";
            MSG.innerHTML = "Be careful of your health."
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
            MSG.style.color = "black";
        } else if (bmi <= 40) {
            MSG.innerHTML = "Obese Class II";
            MSG.innerHTML = "Be careful of your health."
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
            MSG.style.color = "black";
        } else if (bmi <= 50) {
            TYPE.innerHTML = "Obese Class III";
            MSG.innerHTML = "Be careful of your health."
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
            MSG.style.color = "black";
        } else {
            TYPE.innerHTML = "Obese Class IV";
            MSG.innerHTML = "Be careful of your health."
            BMIVALUE.style.color = "red";
            TYPE.style.color = "red";
            MSG.style.color = "black";
        }
    } else {
        MSG.innerHTML = "Please enter a valid height and weight, make sure you have given enough information.";
        MSG.style.color = "red";
    }
}
