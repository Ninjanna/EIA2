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
    class MovingObjects {
        constructor() { }
        update() { }
        getBoundingRect() {
            return [this.x, this.y, 1, 1];
        }
    }
    seaworld_inheritance.MovingObjects = MovingObjects;
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=MovingObjects.js.map