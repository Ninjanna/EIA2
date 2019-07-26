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
    class Foods extends seaworld_inheritance.Bubbles {
        constructor(_x, _y, _c1) {
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
        update() {
            this.move();
            super.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            //Futter stoppt
            if (this.y > this.end) {
                this.dy -= this.dy;
                this.dx -= this.dx;
            }
        }
    }
    seaworld_inheritance.Foods = Foods;
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=Foods.js.map