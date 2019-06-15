/*
Aufgabe 10: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworldcanvas {

    //draw alge nach rechts geneigt
    export function drawAlgeOne(_c1: string, _c2: string, _x: number, _y: number, _crc: CanvasRenderingContext2D): void {

        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x - 40, _y - 185, _x + 20, _y - 230);
        _crc.quadraticCurveTo(_x + 60, _y - 185, _x + 20, _y);
        _crc.closePath();
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.strokeStyle = _c2;
        _crc.stroke();

    }


    //draw alge nach links geneigtS
    export function drawAlgeTwo(_c1: string, _c2: string, _x: number, _y: number, _crc: CanvasRenderingContext2D): void {

        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x - 60, _y - 185, _x - 20, _y - 230);
        _crc.quadraticCurveTo(_x + 40, _y - 185, _x + 20, _y);
        _crc.closePath();
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.strokeStyle = _c2;
        _crc.stroke();

    }
}
