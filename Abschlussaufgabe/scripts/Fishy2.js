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
    class Fishy2 extends seaworld_inheritance.Fishy1 {
        constructor(_c1, _c2) {
            super(_c1, _c2);
        }
        update() {
            this.move();
            /*
                        let r: number[] = this.getBoundingRect();
                        crc.beginPath();
                        crc.moveTo(r[0], r[1]);
                        crc.rect(r[0], r[1], r[2], r[3]);
                        crc.strokeStyle = this.c1;
                        crc.lineWidth = 2;
                        crc.stroke();
            */
            let x = this.x;
            let y = this.y;
            this.x /= this.scale;
            this.y /= this.scale;
            seaworld_inheritance.crc.scale(this.scale, this.scale);
            this.draw();
            seaworld_inheritance.crc.setTransform(1, 0, 0, 1, 0, 0);
            this.x = x;
            this.y = y;
        }
        draw() {
            //Körper
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x, this.y);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 30, this.y - 50, this.x + 70, this.y - 10);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 40);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 100, this.y + 50);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 20);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 25, this.y + 50, this.x, this.y);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c1;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c1;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 30, this.y - 27);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 40, this.y, this.x + 30, this.y + 30);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 45, this.y - 27);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 55, this.y, this.x + 45, this.y + 31);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            // streifen
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 60, this.y - 19);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 70, this.y + 5, this.x + 60, this.y + 26);
            // fill && stroke
            seaworld_inheritance.crc.fillStyle = this.c2;
            seaworld_inheritance.crc.fill();
            seaworld_inheritance.crc.closePath();
            seaworld_inheritance.crc.strokeStyle = this.c2;
            seaworld_inheritance.crc.lineWidth = 1;
            seaworld_inheritance.crc.stroke();
            //Auge
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.arc(this.x + 17, this.y - 6, 3, 0, 2 * Math.PI);
            seaworld_inheritance.crc.strokeStyle = "black";
            seaworld_inheritance.crc.lineWidth = 2;
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fillStyle = "whitesmoke";
            seaworld_inheritance.crc.fill();
            //Auge - Pupille 
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.arc(this.x + 16, this.y - 6, 1, 0, 2 * Math.PI);
            seaworld_inheritance.crc.strokeStyle = "white";
            seaworld_inheritance.crc.fillStyle = "black";
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fill();
            //Mund
            seaworld_inheritance.crc.beginPath();
            seaworld_inheritance.crc.moveTo(this.x + 3, this.y + 15);
            seaworld_inheritance.crc.quadraticCurveTo(this.x + 13, this.y + 18, this.x + 23, this.y + 8);
            seaworld_inheritance.crc.strokeStyle = "transparent";
            seaworld_inheritance.crc.fillStyle = "LightSkyBlue";
            seaworld_inheritance.crc.stroke();
            seaworld_inheritance.crc.fill();
        }
    }
    seaworld_inheritance.Fishy2 = Fishy2;
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=Fishy2.js.map