/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworld_inheritance1;
(function (seaworld_inheritance1) {
    class Fishy2 extends Fishy1 {
        constructor(_c1, _c2) {
            super(_c1, _c2);
        }
        update() {
            super.move();
            this.draw();
        }
        draw() {
            //Körper
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.moveTo(this.x, this.y);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 30, this.y - 50, this.x + 70, this.y - 10);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 40);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 100, this.y + 50);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 20);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 25, this.y + 50, this.x, this.y);
            // fill && stroke
            seaworld_inheritance1.crc.fillStyle = this.c1;
            seaworld_inheritance1.crc.fill();
            seaworld_inheritance1.crc.closePath();
            seaworld_inheritance1.crc.strokeStyle = this.c1;
            seaworld_inheritance1.crc.lineWidth = 1;
            seaworld_inheritance1.crc.stroke();
            // streifen
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.moveTo(this.x + 30, this.y - 27);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 40, this.y, this.x + 30, this.y + 30);
            // fill && stroke
            seaworld_inheritance1.crc.fillStyle = this.c2;
            seaworld_inheritance1.crc.fill();
            seaworld_inheritance1.crc.closePath();
            seaworld_inheritance1.crc.strokeStyle = this.c2;
            seaworld_inheritance1.crc.lineWidth = 1;
            seaworld_inheritance1.crc.stroke();
            // streifen
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.moveTo(this.x + 45, this.y - 27);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 55, this.y, this.x + 45, this.y + 31);
            // fill && stroke
            seaworld_inheritance1.crc.fillStyle = this.c2;
            seaworld_inheritance1.crc.fill();
            seaworld_inheritance1.crc.closePath();
            seaworld_inheritance1.crc.strokeStyle = this.c2;
            seaworld_inheritance1.crc.lineWidth = 1;
            seaworld_inheritance1.crc.stroke();
            // streifen
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.moveTo(this.x + 60, this.y - 19);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 70, this.y + 5, this.x + 60, this.y + 26);
            // fill && stroke
            seaworld_inheritance1.crc.fillStyle = this.c2;
            seaworld_inheritance1.crc.fill();
            seaworld_inheritance1.crc.closePath();
            seaworld_inheritance1.crc.strokeStyle = this.c2;
            seaworld_inheritance1.crc.lineWidth = 1;
            seaworld_inheritance1.crc.stroke();
            //Auge
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.arc(this.x + 17, this.y - 6, 3, 0, 2 * Math.PI);
            seaworld_inheritance1.crc.strokeStyle = "black";
            seaworld_inheritance1.crc.lineWidth = 2;
            seaworld_inheritance1.crc.stroke();
            seaworld_inheritance1.crc.fillStyle = "whitesmoke";
            seaworld_inheritance1.crc.fill();
            //Auge - Pupille 
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.arc(this.x + 16, this.y - 6, 1, 0, 2 * Math.PI);
            seaworld_inheritance1.crc.strokeStyle = "white";
            seaworld_inheritance1.crc.fillStyle = "black";
            seaworld_inheritance1.crc.stroke();
            seaworld_inheritance1.crc.fill();
            //Mund
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.moveTo(this.x + 3, this.y + 15);
            seaworld_inheritance1.crc.quadraticCurveTo(this.x + 13, this.y + 18, this.x + 23, this.y + 8);
            seaworld_inheritance1.crc.strokeStyle = "transparent";
            seaworld_inheritance1.crc.fillStyle = "LightSkyBlue";
            seaworld_inheritance1.crc.stroke();
            seaworld_inheritance1.crc.fill();
        }
    }
    seaworld_inheritance1.Fishy2 = Fishy2;
})(seaworld_inheritance1 || (seaworld_inheritance1 = {}));
//# sourceMappingURL=Fishy2.js.map