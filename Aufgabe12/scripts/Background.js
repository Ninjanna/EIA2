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
    // Background
    function drawBackground() {
        drawWaterGradient("#87CEFA", "#087CC4", seaworld_inheritance.canvas.width, seaworld_inheritance.canvas.height, 300, 1400);
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
    seaworld_inheritance.drawBackground = drawBackground;
    // Wasser
    function drawWaterGradient(_c1, _c2, _x, _y, _r1, _r2) {
        var gradient = seaworld_inheritance.crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        seaworld_inheritance.crc.fillStyle = gradient;
        seaworld_inheritance.crc.fillRect(0, 0, _x, _y);
        seaworld_inheritance.crc.strokeRect(0, 0, _x, _y);
    }
    seaworld_inheritance.drawWaterGradient = drawWaterGradient;
    // Boden vorn
    function drawBodenVorne(_c1, _x, _y) {
        seaworld_inheritance.crc.beginPath();
        seaworld_inheritance.crc.moveTo(_x, _y);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 450, _y + 10, _x + 900, _y + 80);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 1000, _y + 100, _x + 1100, _y + 80);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 1300, _y + 10, _x + 1400, _y);
        seaworld_inheritance.crc.lineTo(_x + 1400, _y + 100);
        seaworld_inheritance.crc.lineTo(_x, _y + 100);
        seaworld_inheritance.crc.strokeStyle = _c1;
        seaworld_inheritance.crc.stroke();
        seaworld_inheritance.crc.fillStyle = _c1;
        seaworld_inheritance.crc.fill();
        seaworld_inheritance.crc.closePath();
    }
    seaworld_inheritance.drawBodenVorne = drawBodenVorne;
    // Boden hinten
    function drawBodenHinten(_c1, _x, _y) {
        seaworld_inheritance.crc.beginPath();
        seaworld_inheritance.crc.moveTo(_x, _y + 70);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 1000, _y - 70, _x + 1400, _y + 80);
        seaworld_inheritance.crc.lineTo(_x + 1400, _y + 100);
        seaworld_inheritance.crc.lineTo(_x, _y + 100);
        seaworld_inheritance.crc.strokeStyle = _c1;
        seaworld_inheritance.crc.stroke();
        seaworld_inheritance.crc.fillStyle = _c1;
        seaworld_inheritance.crc.fill();
        seaworld_inheritance.crc.closePath();
    }
    seaworld_inheritance.drawBodenHinten = drawBodenHinten;
    //draw alge nach rechts geneigt
    function drawAlgeOne(_c1, _c2, _x, _y) {
        seaworld_inheritance.crc.beginPath();
        seaworld_inheritance.crc.moveTo(_x, _y);
        seaworld_inheritance.crc.quadraticCurveTo(_x - 40, _y - 185, _x + 20, _y - 230);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 60, _y - 185, _x + 20, _y);
        seaworld_inheritance.crc.closePath();
        seaworld_inheritance.crc.fillStyle = _c1;
        seaworld_inheritance.crc.fill();
        seaworld_inheritance.crc.strokeStyle = _c2;
        seaworld_inheritance.crc.stroke();
    }
    seaworld_inheritance.drawAlgeOne = drawAlgeOne;
    //draw alge nach links geneigtS
    function drawAlgeTwo(_c1, _c2, _x, _y) {
        seaworld_inheritance.crc.beginPath();
        seaworld_inheritance.crc.moveTo(_x, _y);
        seaworld_inheritance.crc.quadraticCurveTo(_x - 60, _y - 185, _x - 20, _y - 230);
        seaworld_inheritance.crc.quadraticCurveTo(_x + 40, _y - 185, _x + 20, _y);
        seaworld_inheritance.crc.closePath();
        seaworld_inheritance.crc.fillStyle = _c1;
        seaworld_inheritance.crc.fill();
        seaworld_inheritance.crc.strokeStyle = _c2;
        seaworld_inheritance.crc.stroke();
    }
    seaworld_inheritance.drawAlgeTwo = drawAlgeTwo;
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=Background.js.map