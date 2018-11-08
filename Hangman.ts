import { Vector } from "./Vector";
import {Canvas} from "./canvas";
import {SecretWord} from "./SecretWord";


let secretWordElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("secretWord");
let incorrectLettersElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("incorrectLetters");

let inputLetterElement: HTMLInputElement = <HTMLInputElement> document.getElementById("letter");

let buttonGetWordElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getWord");
let buttonEnterLetterElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("enterLetter");

var SecretWordClass: SecretWord = new SecretWord();


var para = document.createElement("p");

buttonGetWordElement.addEventListener("click", MouseEvent => {

    /* this.secretwordclass.getWord() */
    var text = document.createTextNode(this.secretwordclass.getWord());
    secretWordElement.innerHTML += para.appendChild(text).textContent;
})



