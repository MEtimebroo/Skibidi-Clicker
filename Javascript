const btnElement = document.getElementById("btn");
const btnElement1 = document.getElementById("btn1");
const btnElement2 = document.getElementById("btn2");
const btnElement3 = document.getElementById("btn3");
const btnElement4 = document.getElementById("btn4");
const btnElement5 = document.getElementById("btn5");
const spnElement = document.getElementById("span");
let score = 1;

let intervalTimer;
let intervalTimer1;
let intervalTimer2;
let intervalTimer3

btnElement2.addEventListener("click", () => {
    if (score < 10){
        console.log("poor");
    }
    else if (score >= 10){
        score -= 10;
        spnElement.innerText = score;
        intervalTimer = setInterval( increment, 1000);

        function increment(){
            score = score % 1000000 + 1;
            spnElement.innerText = score;
        }
    }
})

btnElement3.addEventListener("click", () => {
    if (score < 30){
        console.log("poor");
    }
    else if (score >= 30){
        score -= 30;
        spnElement.innerText = score;
        intervalTimer1 = setInterval( increment1, 1000);

        function increment1(){
            score = score % 1000000 + 5;
            spnElement.innerText = score;
        }
    }
})

btnElement4.addEventListener("click", () => {
    if (score < 80){
        console.log("poor");
    }
    else if (score >= 80){
        score -= 80;
        spnElement.innerText = score;
        intervalTimer2 = setInterval( increment2, 1000);

        function increment2(){
            score = score % 1000000 + 10;
            spnElement.innerText = score;
        }
    }
})

btnElement5.addEventListener("click", () => {
    if (score < 200){
        console.log("poor");
    }
    else if (score >= 200){
        score -= 200;
        spnElement.innerText = score;
        intervalTimer3 = setInterval( increment3, 1000);

        function increment2(){
            score = score % 1000000 + 30;
            spnElement.innerText = score;
        }
    }
})

btnElement.addEventListener("click", () => {
    spnElement.innerText = score++;
})

btnElement1.addEventListener("click", () => {
    spnElement.innerText = 0;
    score = 1;
    clearTimeout(intervalTimer)
    clearTimeout(intervalTimer1)
    clearTimeout(intervalTimer2)
    clearTimeout(intervalTimer3)
})

document.body.addEventListener("keyup", function (event) {
    if (event.code === "Space"){
        spnElement.innerText = score++;
    }
})

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Space"){
        spnElement.innerText = score;
    }
})

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Enter"){
        spnElement.innerText = 0;
        score = 1;
        clearTimeout(intervalTimer)
        clearTimeout(intervalTimer1)
        clearTimeout(intervalTimer2)
        clearTimeout(intervalTimer3)
    }
})
