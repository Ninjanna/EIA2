/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworld_inheritance1 {

    // Background
    export function drawBackground1(): void {
        drawWaterGradient("#87CEFA", "#087CC4", canvas.width, canvas.height, 300, 1400);

        drawBodenHinten("#C88937", 0, 500);

        drawAlgeOne("#004d00", "transparent", 400, 510);
        drawAlgeTwo("#006400", "transparent", 385, 530);
        drawAlgeOne("#006400", "transparent", 430, 530);
        drawAlgeOne("#00cc00", "transparent", 390, 560);
        drawAlgeTwo("#009900", "transparent", 395, 570);
        drawAlgeOne("#00b300", "transparent", 420, 560);

        drawAlgeOne("#375635", "transparent", 1350, 510);
        drawAlgeTwo("darkgreen", "transparent", 1325, 530);
        drawAlgeOne("green", "transparent", 1330, 550);

        drawBodenVorne("#d9ad73", 0, 500);

        drawAlgeOne("darkgreen", "transparent", 40, 600);
        drawAlgeTwo("#375635", "transparent", 35, 620);
        drawAlgeOne("green", "transparent", 60, 640);

        drawAlgeOne("darkgreen", "transparent", 1080, 600);
        drawAlgeTwo("#375635", "transparent", 1075, 620);
        drawAlgeOne("green", "transparent", 1100, 640);
        drawAlgeTwo("#009900", "transparent", 1090, 660);
    }




    // Wasser
    export function drawWaterGradient1(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number): void {

        var gradient: CanvasGradient = crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, _x, _y);
        crc.strokeRect(0, 0, _x, _y);
    }

    // Boden vorn
    export function drawBodenVorne1(_c1: string, _x: number, _y: number): void {

        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x + 450, _y + 10, _x + 900, _y + 80);
        crc.quadraticCurveTo(_x + 1000, _y + 100, _x + 1100, _y + 80);
        crc.quadraticCurveTo(_x + 1300, _y + 10, _x + 1400, _y);
        crc.lineTo(_x + 1400, _y + 100);
        crc.lineTo(_x, _y + 100);
        crc.strokeStyle = _c1;
        crc.stroke();
        crc.fillStyle = _c1;
        crc.fill();
        crc.closePath();
    }

    // Boden hinten
    export function drawBodenHinten1(_c1: string, _x: number, _y: number): void {

        crc.beginPath();
        crc.moveTo(_x, _y + 70);
        crc.quadraticCurveTo(_x + 1000, _y - 70, _x + 1400, _y + 80);
        crc.lineTo(_x + 1400, _y + 100);
        crc.lineTo(_x, _y + 100);
        crc.strokeStyle = _c1;
        crc.stroke();
        crc.fillStyle = _c1;
        crc.fill();
        crc.closePath();

    }

    //draw alge nach rechts geneigt
    export function drawAlgeOne1(_c1: string, _c2: string, _x: number, _y: number): void {

        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x - 40, _y - 185, _x + 20, _y - 230);
        crc.quadraticCurveTo(_x + 60, _y - 185, _x + 20, _y);
        crc.closePath();
        crc.fillStyle = _c1;
        crc.fill();
        crc.strokeStyle = _c2;
        crc.stroke();

    }

    //draw alge nach links geneigtS
    export function drawAlgeTwo1(_c1: string, _c2: string, _x: number, _y: number): void {

        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x - 60, _y - 185, _x - 20, _y - 230);
        crc.quadraticCurveTo(_x + 40, _y - 185, _x + 20, _y);
        crc.closePath();
        crc.fillStyle = _c1;
        crc.fill();
        crc.strokeStyle = _c2;
        crc.stroke();

    }

}