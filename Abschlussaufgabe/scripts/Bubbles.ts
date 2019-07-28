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

    export class Bubbles extends MovingObjects {

        r: number;
        angle: number;

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dy = Math.random() * 0.8;
            this.dx = 0;
            this.end = 0;
            this.start = canvas.height;
            this.r = Math.random() * 20;
            this.angle = 2 * Math.PI;
            this.c1 = "white";
            this.c2 = "rgb(206, 240, 300, 0.3)";
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void { 
            crc.beginPath();
            crc.arc(this.x, this.y, this.r, 0, this.angle);
            crc.strokeStyle = this.c1;
            crc.stroke();
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
        }

        move(): void {
            this.y -= this.dy;
            if (this.y < this.end) {
                this.y = this.start;
                this.x = Math.random() * canvas.width;
            }
        }

    }

}
