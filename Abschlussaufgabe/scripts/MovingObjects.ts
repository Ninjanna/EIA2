/*
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworld_inheritance {

    export class MovingObjects {

        x: number;
        y: number;
        dx: number;
        dy: number;
        end: number;
        start: number;
        c1: string;
        c2: string;
        scale: number;

        constructor() { }


        update(): void { }

        gibViereck(): number[] {
            return [this.x, this.y, 1, 1];
        }


    }
}