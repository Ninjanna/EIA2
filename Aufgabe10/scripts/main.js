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
        drawWaterGradient1("#87CEFA", "#087CC4", canvas.width, canvas.height, 300, 1400, crc);
        //Boden Hinten
        drawBodenHinten1("#C88937", 0, 500, crc);
        //Pflanze hinten links
        drawAlgeOne1("#004d00", "transparent", 400, 510, crc);
        drawAlgeTwo1("#006400", "transparent", 385, 530, crc);
        drawAlgeOne1("#006400", "transparent", 430, 530, crc);
        drawAlgeOne1("#00cc00", "transparent", 390, 560, crc);
        drawAlgeTwo1("#009900", "transparent", 395, 570, crc);
        drawAlgeOne1("#00b300", "transparent", 420, 560, crc);
        //Pflanze hinten rechts
        drawAlgeOne1("#375635", "transparent", 1350, 510, crc);
        drawAlgeTwo1("darkgreen", "transparent", 1325, 530, crc);
        drawAlgeOne1("green", "transparent", 1330, 550, crc);
        //Bubbles
        for (let i = 0; i < 400; i++) {
            let x = 10 + Math.random() * 1390;
            let y = Math.random() * 600;
            let r = Math.random() * (5 - 2) + 2;
            drawBubble("rgb(206, 240, 300, 0.3)", "white", x, y, r, crc);
        }
        //Boden Vorne
        drawBodenVorne1("#d9ad73", 0, 500, crc);
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
            seaworld_canvas.drawFishyOnee(x, y, c1, c2, crc);
        }
        //Fish Two
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 1400;
            let y = 50 + Math.random() * 500;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let c1 = colors4fish[rndm1];
            let c2 = colors4fish[rndm2];
            seaworld_canvas.drawFishyTwoo(x, y, c1, c2, crc);
        }
        //Pflanze links
        drawAlgeOne("darkgreen", "transparent", 40, 600, crc);
        drawAlgeTwo("#375635", "transparent", 35, 620, crc);
        drawAlgeOne("green", "transparent", 60, 640, crc);
        //Pflanze rechts
        drawAlgeOne("darkgreen", "transparent", 1080, 600, crc);
        drawAlgeTwo("#375635", "transparent", 1075, 620, crc);
        drawAlgeOne("green", "transparent", 1100, 640, crc);
        drawAlgeTwo("#009900", "transparent", 1090, 660, crc);
    }
})(seaworld_canvas || (seaworld_canvas = {})); //close namespace
//# sourceMappingURL=main.js.map