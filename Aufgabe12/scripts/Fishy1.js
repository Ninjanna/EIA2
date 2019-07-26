/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworld_inheritance;
(function (seaworld_inheritance) {
    class Fishy1 extends seaworld_inheritance.MovingObjects {
        constructor(_c1, _c2) {
            super();
            this.x = Math.random() * seaworld_inheritance.canvas.width;
            this.y = 20 + Math.random() * 470;
            this.dx = 0.5 + Math.random() * 3;
            this.dy = 0;
            this.end = (0 - 100);
            this.start = seaworld_inheritance.canvas.width;
            this.c1 = _c1;
            this.c2 = _c2;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Körper
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x, this.y);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 30, this.y - 30, this.x + 70, this.y);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 10);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 85, this.y + 5, this.x + 100, this.y + 25);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 10);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c1;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c1;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 30, this.y - 15);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 35, this.y, this.x + 30, this.y + 18);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 45, this.y - 14);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 50, this.y, this.x + 45, this.y + 18);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 60, this.y - 7);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 60, this.y + 14);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            //Auge
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.arc(this.x + 15, this.y - 3, 3, 0, 2 * Math.PI);
            seaworld_inheritance.crc.strokeStyle = "black";
            seaworld_inheritance.crc.lineWidth = 2;
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fillStyle = "whitesmoke";
            seaworld_inheritance.crc.fill();
            //Auge - Pupille 
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.arc(this.x + 14, this.y - 3, 1, 0, 2 * Math.PI);
            seaworld_inheritance.crc.strokeStyle = "white";
            seaworld_inheritance.crc.fillStyle = "black";
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fill();
            //Mund
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 5, this.y + 8);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 15, this.y + 13, this.x + 20, this.y + 3);
            seaworld_inheritance.crc.strokeStyle = "transparent";
            seaworld_inheritance.crc.fillStyle = "LightSkyBlue";
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fill();
        }
        move() {
            this.x -= this.dx;
            if (this.x < this.end) {
                this.x = this.start;
                this.y = 20 + Math.random() * 470;
                this.dx = 1 + Math.random() * 8;
            }
        }
    }
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=Fishy1.js.map