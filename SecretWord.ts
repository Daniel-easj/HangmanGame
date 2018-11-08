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

    RevealLetter(letter:string):void{
        this.revealedWord.replace(this.revealedWord[this.word.search(letter)] , letter);
    }

    
    RevealLetter2(letter:string):boolean{
        this.revealedLetters.forEach(element => {
            // Er der allerede fundet bogstaver med bogstavet i "letter"?
            if (this.revealedLetters.includes(letter)) {
                return false;
            }

            else
            {
                for (let index = 0; index < this.word.length; index++) {
                    if (this.word.search(letter) != -1) {
                        this.revealedWord.replace(this.revealedWord[this.word.search(letter)] , letter);
                    }
                    else{
                        break;
                    }
                }

                return true;
            }
        });
        return false;
    }

    toString():string{
        
        return this.revealedWord;
    }






}
