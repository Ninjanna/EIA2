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
    window.addEventListener("load", init);
    function init() {
        console.log("Wer wohnt da im Wasser, ja ganz tief im Meeer?");
        let canvas = document.getElementsByTagName("canvas")[0];
        let crc = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
        crc.strokeStyle = "black";
        crc.strokeRect(0, 0, canvas.width, canvas.height);
        //Wasser
        seaworld_canvas.drawWaterGradient("#87CEFA", "#087CC4", canvas.width, canvas.height, 300, 1400, crc);
        //Boden Hinten
        seaworld_canvas.drawBodenHinten("#C88937", 0, 500, crc);
        //Pflanze hinten links
        seaworld_canvas.drawAlgeOne("#004d00", "transparent", 400, 510, crc);
        seaworld_canvas.drawAlgeTwo("#006400", "transparent", 385, 530, crc);
        seaworld_canvas.drawAlgeOne("#006400", "transparent", 430, 530, crc);
        seaworld_canvas.drawAlgeOne("#00cc00", "transparent", 390, 560, crc);
        seaworld_canvas.drawAlgeTwo("#009900", "transparent", 395, 570, crc);
        seaworld_canvas.drawAlgeOne("#00b300", "transparent", 420, 560, crc);
        //Pflanze hinten rechts
        seaworld_canvas.drawAlgeOne("#375635", "transparent", 1350, 510, crc);
        seaworld_canvas.drawAlgeTwo("darkgreen", "transparent", 1325, 530, crc);
        seaworld_canvas.drawAlgeOne("green", "transparent", 1330, 550, crc);
        //Bubbles
        for (let i = 0; i < 400; i++) {
            let x = 10 + Math.random() * 1390;
            let y = Math.random() * 600;
            let r = Math.random() * (5 - 2) + 2;
            seaworld_canvas.drawBubble("rgb(206, 240, 300, 0.3)", "white", x, y, r, crc);
        }
        //Boden Vorne
        seaworld_canvas.drawBodenVorne("#d9ad73", 0, 500, crc);
        //color Array     
        let colors4fish = ["MediumOrchid ", "MediumVioletRed", "Orange", "OrangeRed", "Tomato", "Yellow", "Red", "Magenta", "Gold", "Crimson", "DarkMagenta"];
        //Fish One
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 1400;
            let y = 50 + Math.random() * 500;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let c1 = colors4fish[rndm1];
            let c2 = colors4fish[rndm2];
            seaworld_canvas.drawFishyOne(x, y, c1, c2, crc);
        }
        //Fish Two
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 1400;
            let y = 50 + Math.random() * 500;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let c1 = colors4fish[rndm1];
            let c2 = colors4fish[rndm2];
            seaworld_canvas.drawFishyTwo(x, y, c1, c2, crc);
        }
        //Pflanze links
        seaworld_canvas.drawAlgeOne("darkgreen", "transparent", 40, 600, crc);
        seaworld_canvas.drawAlgeTwo("#375635", "transparent", 35, 620, crc);
        seaworld_canvas.drawAlgeOne("green", "transparent", 60, 640, crc);
        //Pflanze rechts
        seaworld_canvas.drawAlgeOne("darkgreen", "transparent", 1080, 600, crc);
        seaworld_canvas.drawAlgeTwo("#375635", "transparent", 1075, 620, crc);
        seaworld_canvas.drawAlgeOne("green", "transparent", 1100, 640, crc);
        seaworld_canvas.drawAlgeTwo("#009900", "transparent", 1090, 660, crc);
    }
})(seaworld_canvas || (seaworld_canvas = {})); //close namespace
//# sourceMappingURL=main.js.map