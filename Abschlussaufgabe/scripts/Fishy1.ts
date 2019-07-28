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

    export class Fishy1 extends MovingObjects {


        constructor(_c1: string, _c2: string) {
            super();
            //this.x = Math.random() * canvas.width;
            this.x = canvas.width - 100;
            this.y = 20 + Math.random() * 470;
            this.dx = 0.5 + Math.random() * 3;
            this.dy = 0;
            this.end = (0 - 100);
            this.start = canvas.width;
            this.c1 = _c1;
            this.c2 = _c2;
            this.scale = 0.5 + Math.random() * 1.5;
        }

        gibViereck(): number[] {
            let w: number = 100 * this.scale;
            let h: number = 60 * this.scale;
            return [this.x, this.y - h / 2, w, h];
        }


        update(): void {
            this.move();
            crc.scale(this.scale, this.scale);
            this.draw();
            crc.setTransform(1, 0, 0, 1, 0, 0);
        }

        draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 30, this.y - 30, this.x + 70, this.y);
            crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 10);
            crc.quadraticCurveTo(this.x + 85, this.y + 5, this.x + 100, this.y + 25);
            crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 10);
            crc.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y);

            // fill && stroke
            crc.fillStyle = this.c1;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c1;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 30, this.y - 15);
            crc.quadraticCurveTo(this.x + 35, this.y, this.x + 30, this.y + 18);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y - 14);
            crc.quadraticCurveTo(this.x + 50, this.y, this.x + 45, this.y + 18);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 60, this.y - 7);
            crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 60, this.y + 14);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            //Auge
            crc.beginPath();
            crc.arc(this.x + 15, this.y - 3, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "whitesmoke";
            crc.fill();

            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.x + 14, this.y - 3, 1, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();


            //Mund
            crc.beginPath();
            crc.moveTo(this.x + 5, this.y + 8);
            crc.quadraticCurveTo(this.x + 15, this.y + 13, this.x + 20, this.y + 3);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "LightSkyBlue";
            crc.stroke();
            crc.fill();
       }



        move(): void {
            this.x -= this.dx;
            if (this.x < this.end) {
                this.x = this.start;
                this.y = 20 + Math.random() * 470;
                this.dx = 1 + Math.random() * 8;
            }
        }

    }

}