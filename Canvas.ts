import {Vector} from "./Vector";


export class Canvas{
    public canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    public ctx = this.canvas.getContext("2d");

    constructor(){
        this.ctx.fillStyle = "#FF0000";
    }

    DrawHangman(incorrectGuesses: number):void{
        
        switch (incorrectGuesses) {
            case 1:
            this.DrawHead();
                break;
            case 2:
            this.DrawBody();
                break;
            case 3:
            this.DrawLeftHand();
                break;
            case 4:
            this.DrawRightHand();
                break;
            case 5:
            this.DrawLeftFoot();
                break;
            case 6:
            this.DrawrightFoot();
                break;
            default:
                break;
        }
        
    }
    
    DrawHead(): void{
        this.ctx.fillRect(100, 20, 75, 75)
    }
    
    DrawBody(): void{
        this.ctx.fillRect(135, 100, 5, 100)
    }

    DrawLeftHand():void{
        this.ctx.fillRect(60,120, 80, 10)
    }

    DrawRightHand():void{
        this.ctx.fillRect(140,120, 80, 10)
    }

    DrawLeftFoot():void{
        this.ctx.fillRect(125,200, 8, 80)
    }

    DrawrightFoot():void{
        this.ctx.fillRect(140,200, 8, 80)
    }
    
}
