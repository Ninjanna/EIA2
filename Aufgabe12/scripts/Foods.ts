/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworld_inheritance {

    class Foods extends Bubbles {

        constructor(_x: number, _y: number, _c1: string) {
            super();
            this.x = _x;
            this.y = _y;
            this.dy = 0.7 + Math.random() * 1.5;
            this.dx = (0 - 0.2) + Math.random() * 0.2;
            this.end = 570 + Math.random() * 30;
            this.r = 2 + Math.random() * 4;
            this.c1 = _c1;
            this.c2 = _c1;
        }

        update(): void {
            this.move();
            super.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            //Futter stoppt
            if (this.y > this.end) {
                this.dy -= this.dy;
                this.dx -= this.dx;
            }
        }

    }

}
