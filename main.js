"use strict";
const counterElem = document.querySelector('.counter__display');
const counterStartBtn = document.querySelector('.conter__start-btn');
const counterStopBtn = document.querySelector('.conter__stop-btn');
const counterResetBtn = document.querySelector('.conter__reset-btn');
let startTime = 30;
let counterTime = startTime;
let counter = null;

function initTime() {
    if (counterTime < 0 || typeof counterTime === 'string') {
        counterElem.textContent = 'NaN';
        return false;
    } else {
        counterElem.textContent = counterTime;
    }
}

function countTime() {
    if (counter !== null) return;
    counter = setInterval(() => {
        if (counterTime > 0) {
            counterTime = counterTime - 1;
            counterElem.textContent = counterTime;
        }
    }, 1000);
}

function pauseTime() {
    clearInterval(counter);
    counter = null;
}

function resetTime() {
    clearInterval(counter);
    counter = null;
    counterTime = startTime;
    counterElem.textContent = counterTime;
}

initTime();
counterStartBtn.addEventListener("click", countTime);
counterStopBtn.addEventListener("click", pauseTime);
counterResetBtn.addEventListener("click", resetTime);