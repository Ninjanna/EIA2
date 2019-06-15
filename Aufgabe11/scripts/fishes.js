/*
Aufgabe 10: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworldcanvas;
(function (seaworldcanvas) {
    // export let crc: CanvasRenderingContext2D;
    class Fishy {
        draw() {
            //Körper
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x, this.y);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 30, this.y - 30, this.x + 70, this.y);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 10);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 85, this.y + 5, this.x + 100, this.y + 25);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 10);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c1;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c1;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 30, this.y - 15);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 35, this.y, this.x + 30, this.y + 18);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 45, this.y - 14);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 50, this.y, this.x + 45, this.y + 18);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 60, this.y - 7);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 60, this.y + 14);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            //Auge
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.arc(this.x + 15, this.y - 3, 3, 0, 2 * Math.PI);
            seaworldcanvas.crc.strokeStyle = "black";
            seaworldcanvas.crc.lineWidth = 2;
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fillStyle = "whitesmoke";
            seaworldcanvas.crc.fill();
            //Auge - Pupille 
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.arc(this.x + 14, this.y - 3, 1, 0, 2 * Math.PI);
            seaworldcanvas.crc.strokeStyle = "white";
            seaworldcanvas.crc.fillStyle = "black";
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fill();
            //Mund
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 5, this.y + 8);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 15, this.y + 13, this.x + 20, this.y + 3);
            seaworldcanvas.crc.strokeStyle = "transparent";
            seaworldcanvas.crc.fillStyle = "LightSkyBlue";
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fill();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x -= this.dx;
            if (this.x + 30 < 0) {
                this.x = 2000;
            }
        }
    }
    seaworldcanvas.Fishy = Fishy;
    class Fishy2 {
        draw() {
            //Körper
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x, this.y);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 30, this.y - 50, this.x + 70, this.y - 10);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 40);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 100, this.y + 50);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 20);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 25, this.y + 50, this.x, this.y);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c1;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c1;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 30, this.y - 27);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 40, this.y, this.x + 30, this.y + 30);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 45, this.y - 27);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 55, this.y, this.x + 45, this.y + 31);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            // streifen
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 60, this.y - 19);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 70, this.y + 5, this.x + 60, this.y + 26);
            // fill && stroke
            seaworldcanvas.crc.fillStyle = this.c2;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
            seaworldcanvas.crc.strokeStyle = this.c2;
            seaworldcanvas.crc.lineWidth = 1;
            seaworldcanvas.crc.stroke();
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            //Auge
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.arc(this.x + 17, this.y - 6, 3, 0, 2 * Math.PI);
            seaworldcanvas.crc.strokeStyle = "black";
            seaworldcanvas.crc.lineWidth = 2;
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fillStyle = "whitesmoke";
            seaworldcanvas.crc.fill();
            //Auge - Pupille 
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.arc(this.x + 16, this.y - 6, 1, 0, 2 * Math.PI);
            seaworldcanvas.crc.strokeStyle = "white";
            seaworldcanvas.crc.fillStyle = "black";
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fill();
            //Mund
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.moveTo(this.x + 3, this.y + 15);
            seaworldcanvas.crc.quadraticCurveTo(this.x + 13, this.y + 18, this.x + 23, this.y + 8);
            seaworldcanvas.crc.strokeStyle = "transparent";
            seaworldcanvas.crc.fillStyle = "LightSkyBlue";
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fill();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x -= this.dx;
            if (this.x + 30 < 0) {
                this.x = 2000;
            }
        }
    }
    seaworldcanvas.Fishy2 = Fishy2;
    class Bubbles {
        constructor() {
            this.angle = 2 * Math.PI;
        }
        draw() {
            seaworldcanvas.crc.beginPath();
            seaworldcanvas.crc.arc(this.x, this.y, this.r, 0, this.angle);
            seaworldcanvas.crc.strokeStyle = this.cS;
            seaworldcanvas.crc.stroke();
            seaworldcanvas.crc.fillStyle = this.cF;
            seaworldcanvas.crc.fill();
            seaworldcanvas.crc.closePath();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y -= this.dy;
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }
    seaworldcanvas.Bubbles = Bubbles;
})(seaworldcanvas || (seaworldcanvas = {}));
//# sourceMappingURL=fishes.js.map