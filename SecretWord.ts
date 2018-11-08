import axios from 'axios';


export class SecretWord{
    
    private word: string;
    private revealedWord: string;
    public revealedLetters: string[] = new Array<string>();

    private _numberOfWords: number;
    private _maxWordLength: number;
    private _minWordLength: number;


    constructor(numberOfWords: number, maxWordLength: number, minWordLength: number){
        this._numberOfWords = numberOfWords;
        this._maxWordLength = maxWordLength;
        this._minWordLength = minWordLength;
    }

    async GetWord(){
    let tempWord: string;
    await axios.get("http://api.evang.dk/randomwords/", {
    'headers': 
    {
        'numberOfWords': this._numberOfWords,
        'maxWordLength': this._maxWordLength,
        'minWordLength': this._minWordLength,
    }
    })
    .then( function (response)
    {
        tempWord = response.data.words[0];
        console.log(response.data)

    })
    this.word = tempWord;
    this.revealedWord = this.word.replace(/[a-åA-Å]/g, "_");

    }

    GetWordValue() : string{
        return this.word;
    }

    RevealLetter(letter:string):boolean{
        /* this.revealedWord.replace(this.revealedWord[this.word.search(letter)] , letter); */
        let tempRevealedWordArray: string[] = new Array<string>();
        let tempWordArray: string[] = new Array<string>();
        let tempBool: boolean = false;

        tempRevealedWordArray = this.revealedWord.split(/(?=[\s\S])/u);
        tempWordArray = this.word.split(/(?=[\s\S])/u);

        for (let index = 0; index < tempWordArray.length; index++) {
            if (tempWordArray[index] == letter) {
                tempRevealedWordArray[index] = letter;
                tempBool = true;
            }
        }
        this.revealedWord = tempRevealedWordArray.join('');

        return tempBool;
    }


    GetRevealedWord():string{
        
        return this.revealedWord;
    }






}
