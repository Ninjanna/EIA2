/*
Aufgabe 10: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworld_canvas;
(function (seaworld_canvas) {
    // Wasser
    function drawWaterGradientt(_c1, _c2, _x, _y, _r1, _r2, _crc) {
        var gradient = _crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _crc.fillStyle = gradient;
        _crc.fillRect(0, 0, _x, _y);
        _crc.strokeRect(0, 0, _x, _y);
    }
    seaworld_canvas.drawWaterGradientt = drawWaterGradientt;
    // Boden vorn
    function drawBodenVornee(_c1, _x, _y, _crc) {
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 450, _y + 10, _x + 900, _y + 80);
        _crc.quadraticCurveTo(_x + 1000, _y + 100, _x + 1100, _y + 80);
        _crc.quadraticCurveTo(_x + 1300, _y + 10, _x + 1400, _y);
        _crc.lineTo(_x + 1400, _y + 100);
        _crc.lineTo(_x, _y + 100);
        _crc.strokeStyle = _c1;
        _crc.stroke();
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
    }
    seaworld_canvas.drawBodenVornee = drawBodenVornee;
    // Boden hinten
    function drawBodenHintenn(_c1, _x, _y, _crc) {
        _crc.beginPath();
        _crc.moveTo(_x, _y + 70);
        _crc.quadraticCurveTo(_x + 1000, _y - 70, _x + 1400, _y + 80);
        _crc.lineTo(_x + 1400, _y + 100);
        _crc.lineTo(_x, _y + 100);
        _crc.strokeStyle = _c1;
        _crc.stroke();
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
    }
    seaworld_canvas.drawBodenHintenn = drawBodenHintenn;
    // Bubble
    function drawBubblee(_cF, _cS, _x, _y, _r, _crc) {
        _crc.beginPath();
        _crc.arc(_x, _y, _r, 0, 2 * Math.PI);
        _crc.strokeStyle = _cS;
        _crc.stroke();
        _crc.fillStyle = _cF;
        _crc.fill();
        _crc.closePath();
    }
    seaworld_canvas.drawBubblee = drawBubblee;
})(seaworld_canvas || (seaworld_canvas = {}));
//# sourceMappingURL=background.js.map