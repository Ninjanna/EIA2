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
    class PlayerFish extends seaworld_inheritance.Fishy2 {
        constructor(_c1) {
            super(_c1, _c1);
            this.scale = 1.0;
            this.dx = 0;
            this.dy = 0;
            this.x = seaworld_inheritance.canvas.width / 2;
            this.y = seaworld_inheritance.canvas.height / 2;
        }
        move() {
            if (this.x < 32 || this.x > seaworld_inheritance.canvas.width - 32) {
                this.x -= this.dx;
                this.dx = 0;
            }
            else {
                this.x += this.dx;
            }
            if (this.y < 32) {
                this.y = 32;
                this.dy = 0;
            }
            else {
                if (this.y > seaworld_inheritance.canvas.height - 32) {
                    this.y = seaworld_inheritance.canvas.height - 32;
                    this.dy = 0;
                }
                else {
                    this.y += this.dy;
                }
            }
        }
    }
    seaworld_inheritance.PlayerFish = PlayerFish;
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=PlayerFish.js.map