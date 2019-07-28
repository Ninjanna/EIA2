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

    export class Fishy2 extends Fishy1 {

        constructor(_c1: string, _c2: string) {
            super(_c1, _c2);
        }

        update(): void {
            this.move();

            let x: number = this.x;
            let y: number = this.y;
            this.x /= this.scale;
            this.y /= this.scale;

            crc.scale(this.scale, this.scale);
            this.draw();
            crc.setTransform(1, 0, 0, 1, 0, 0);

            this.x = x;
            this.y = y;
        }

        draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 30, this.y - 50, this.x + 70, this.y - 10);
            crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 40);
            crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 100, this.y + 50);
            crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 20);
            crc.quadraticCurveTo(this.x + 25, this.y + 50, this.x, this.y);

            // fill && stroke
            crc.fillStyle = this.c1;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c1;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 30, this.y - 27);
            crc.quadraticCurveTo(this.x + 40, this.y, this.x + 30, this.y + 30);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y - 27);
            crc.quadraticCurveTo(this.x + 55, this.y, this.x + 45, this.y + 31);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen 
            crc.beginPath();
            crc.moveTo(this.x + 60, this.y - 19);
            crc.quadraticCurveTo(this.x + 70, this.y + 5, this.x + 60, this.y + 26);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            //Auge
            crc.beginPath();
            crc.arc(this.x + 17, this.y - 6, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "whitesmoke";
            crc.fill();

            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.x + 16, this.y - 6, 1, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();

            //Mund
            crc.beginPath();
            crc.moveTo(this.x + 3, this.y + 15);
            crc.quadraticCurveTo(this.x + 13, this.y + 18, this.x + 23, this.y + 8);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "LightSkyBlue";
            crc.stroke();
            crc.fill();
        }

    }

}

