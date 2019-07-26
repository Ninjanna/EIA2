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
    class Bubbles extends MovingObjects {
        constructor() {
            super();
            this.x = Math.random() * seaworld_inheritance1.canvas.width;
            this.y = Math.random() * seaworld_inheritance1.canvas.height;
            this.dy = Math.random() * 0.8;
            this.dx = 0;
            this.end = 0;
            this.start = seaworld_inheritance1.canvas.height;
            this.r = Math.random() * 20;
            this.angle = 2 * Math.PI;
            this.c1 = "white";
            this.c2 = "rgb(206, 240, 300, 0.3)";
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            seaworld_inheritance1.crc.beginPath();
            seaworld_inheritance1.crc.arc(this.x, this.y, this.r, 0, this.angle);
            seaworld_inheritance1.crc.strokeStyle = this.c1;
            seaworld_inheritance1.crc.stroke();
            seaworld_inheritance1.crc.fillStyle = this.c2;
            seaworld_inheritance1.crc.fill();
            seaworld_inheritance1.crc.closePath();
        }
        move() {
            this.y -= this.dy;
            if (this.y < this.end) {
                this.y = this.start;
                this.x = Math.random() * seaworld_inheritance1.canvas.width;
            }
        }
    }
    seaworld_inheritance1.Bubbles = Bubbles;
})(seaworld_inheritance1 || (seaworld_inheritance1 = {}));
//# sourceMappingURL=Bubbles.js.map