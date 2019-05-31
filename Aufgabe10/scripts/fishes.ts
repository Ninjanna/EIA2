/*
Aufgabe 10: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworld_canvas {

    // Fish 1
    export function drawFishyOne(_x: number, _y: number, _c1: string, _c2: string, _crc: CanvasRenderingContext2D): void {

        //Körper
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 30, _y - 30, _x + 70, _y);
        _crc.quadraticCurveTo(_x + 80, _y, _x + 100, _y - 10);
        _crc.quadraticCurveTo(_x + 85, _y + 5, _x + 100, _y + 25);
        _crc.quadraticCurveTo(_x + 80, _y + 10, _x + 70, _y + 10);
        _crc.quadraticCurveTo(_x + 25, _y + 30, _x, _y);

        // fill && stroke
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c1;
        _crc.lineWidth = 1;
        _crc.stroke();

        //______________________________________________________
        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 30, _y - 15);
        _crc.quadraticCurveTo(_x + 35, _y, _x + 30, _y + 18);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 45, _y - 14);
        _crc.quadraticCurveTo(_x + 50, _y, _x + 45, _y + 18);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 60, _y - 7);
        _crc.quadraticCurveTo(_x + 80, _y + 5, _x + 60, _y + 14);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        //______________________________________________________
        //Auge
        _crc.beginPath();
        _crc.arc(_x + 15, _y - 3, 3, 0, 2 * Math.PI);
        _crc.strokeStyle = "black";
        _crc.lineWidth = 2;
        _crc.stroke();
        _crc.fillStyle = "whitesmoke";
        _crc.fill();

        //Auge - Pupille 
        _crc.beginPath();
        _crc.arc(_x + 14, _y - 3, 1, 0, 2 * Math.PI);
        _crc.strokeStyle = "white";
        _crc.fillStyle = "black";
        _crc.stroke();
        _crc.fill();


        //Mund
        _crc.beginPath();
        _crc.moveTo(_x + 5, _y + 8);
        _crc.quadraticCurveTo(_x + 15, _y + 13, _x + 20, _y + 3);
        _crc.strokeStyle = "transparent";
        _crc.fillStyle = "LightSkyBlue";
        _crc.stroke();
        _crc.fill();
    }

    // Fish 2
    export function drawFishyTwo(_x: number, _y: number, _c1: string, _c2: string, _crc: CanvasRenderingContext2D): void {

        //Körper
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 30, _y - 50, _x + 70, _y - 10);
        _crc.quadraticCurveTo(_x + 80, _y, _x + 100, _y - 40);
        _crc.quadraticCurveTo(_x + 80, _y + 5, _x + 100, _y + 50);
        _crc.quadraticCurveTo(_x + 80, _y + 10, _x + 70, _y + 20);
        _crc.quadraticCurveTo(_x + 25, _y + 50, _x, _y);

        // fill && stroke
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c1;
        _crc.lineWidth = 1;
        _crc.stroke();

        //______________________________________________________
        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 30, _y - 27);
        _crc.quadraticCurveTo(_x + 40, _y, _x + 30, _y + 30);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 45, _y - 27);
        _crc.quadraticCurveTo(_x + 55, _y, _x + 45, _y + 31);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        // streifen
        _crc.beginPath();
        _crc.moveTo(_x + 60, _y - 19);
        _crc.quadraticCurveTo(_x + 70, _y + 5, _x + 60, _y + 26);

        // fill && stroke
        _crc.fillStyle = _c2;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 1;
        _crc.stroke();

        //______________________________________________________
        //Auge
        _crc.beginPath();
        _crc.arc(_x + 17, _y - 6, 3, 0, 2 * Math.PI);
        _crc.strokeStyle = "black";
        _crc.lineWidth = 2;
        _crc.stroke();
        _crc.fillStyle = "whitesmoke";
        _crc.fill();

        //Auge - Pupille 
        _crc.beginPath();
        _crc.arc(_x + 16, _y - 6, 1, 0, 2 * Math.PI);
        _crc.strokeStyle = "white";
        _crc.fillStyle = "black";
        _crc.stroke();
        _crc.fill();


        //Mund
        _crc.beginPath();
        _crc.moveTo(_x + 3, _y + 15);
        _crc.quadraticCurveTo(_x + 13, _y + 18, _x + 23, _y + 8);
        _crc.strokeStyle = "transparent";
        _crc.fillStyle = "LightSkyBlue";
        _crc.stroke();
        _crc.fill();

    }

}