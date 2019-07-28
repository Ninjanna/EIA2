/*

Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.  
*/


namespace seaworld_inheritance {

    export class PlayerFish extends Fishy2 {

        constructor(_c1: string) {
            super(_c1, _c1);
            this.scale = 1.0;
            this.dx = 0;
            this.dy = 0;
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
        }

        move(): void {
            if (this.x < 32 || this.x > canvas.width - 32) {
                this.x -= this.dx;
                this.dx = 0;
            }
            else {
                this.x += this.dx;
            }

            if (this.y < 32) {
                this.y = 32;
                this.dy = 0;
            }
            else {
                if (this.y > canvas.height - 32) {
                    this.y = canvas.height - 32;
                    this.dy = 0;
                }
                else {
                    this.y += this.dy;
                }
            }

        }
        
    }

}

