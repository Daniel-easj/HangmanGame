import { Vector } from "./Vector";
import {Canvas} from "./canvas";
import {SecretWord} from "./SecretWord";
import axios from 'axios';


let secretWordElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("secretWord");
let incorrectLettersElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("incorrectLetters");

let inputLetterElement: HTMLInputElement = <HTMLInputElement> document.getElementById("letter");

let buttonGetWordElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getWord");
let buttonEnterLetterElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("enterLetter");
let buttonStartGameElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("startGame");

let SecretWordClass: SecretWord = new SecretWord(1,8,5);

let canvasThings: Canvas = new Canvas();

let incorrectGuesses: number = 0;

buttonEnterLetterElement.addEventListener("click", MouseEvent => {
    
})

buttonGetWordElement.addEventListener("click", MouseEvent => {
    GetWordAsync();
})

buttonStartGameElement.addEventListener("click", MouseEvent => {
    secretWordElement.innerHTML = SecretWordClass.GetRevealedWord().split('').join(' ');
})

buttonEnterLetterElement.addEventListener("click", MouseEvent =>{
       HandleRevealLetter();
})

function HandleRevealLetter(){
    if (!SecretWordClass.RevealLetter(inputLetterElement.value)) {
        incorrectLettersElement.innerHTML += inputLetterElement.value + " ";

        incorrectGuesses++;
        if (incorrectGuesses == 6) {
            incorrectLettersElement.innerHTML = "You lost idiot"
        }
        canvasThings.DrawHangman(incorrectGuesses);
    }
    
    secretWordElement.innerHTML = SecretWordClass.GetRevealedWord().split('').join(' ');
      inputLetterElement.value = "";

}

async function GetWordAsync(){
    await SecretWordClass.GetWord();
}