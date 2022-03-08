"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let counter = localStorage.getItem("counter");
    const display = document.getElementById("template");
    display.innerHTML = counter;
    document.querySelector(".button").addEventListener("click", () => {
        counter++;
        display.innerHTML = counter;
        localStorage.setItem("counter", counter);

        return false;
    });
});

