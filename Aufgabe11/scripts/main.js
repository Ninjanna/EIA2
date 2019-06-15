/*
Aufgabe 11: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworldcanvas;
(function (seaworldcanvas) {
    window.addEventListener("load", init);
    let canvas;
    let fisch1 = [];
    let fisch2 = [];
    let bubbles = [];
    let fps = 30;
    let imageData;
    function init() {
        console.log("hallo ich arbeite");
        canvas = document.getElementsByTagName("canvas")[0];
        seaworldcanvas.crc = canvas.getContext("2d");
        imageData = seaworldcanvas.crc.getImageData(0, 0, canvas.width, canvas.height);
        seaworldcanvas.crc.strokeStyle = "black";
        seaworldcanvas.crc.strokeRect(0, 0, canvas.width, canvas.height);
        //color Array     
        let colors4fish = ["MediumOrchid ", "MediumVioletRed", "Orange", "OrangeRed", "Tomato", "Yellow", "Red", "Magenta", "Gold", "Crimson", "DarkMagenta"];
        //Fish One
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 + 1;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let fish;
            fish = new seaworldcanvas.Fishy();
            fish.x = x;
            fish.y = y;
            fish.c1 = colors4fish[rndm1];
            fish.c2 = colors4fish[rndm2];
            fish.dx = dx;
            fisch1.push(fish);
        }
        //Fish Two
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 + 1;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let fish2;
            fish2 = new seaworldcanvas.Fishy2();
            fish2.x = x;
            fish2.y = y;
            fish2.c1 = colors4fish[rndm1];
            fish2.c2 = colors4fish[rndm2];
            fish2.dx = dx;
            fisch2.push(fish2);
        }
        //Bubbles
        for (let i = 0; i < 40; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * 1;
            let bubble;
            bubble = new seaworldcanvas.Bubbles();
            bubble.x = x;
            bubble.y = y;
            bubble.r = Math.random() * 20;
            bubble.dy = dy;
            bubble.cF = "rgb(206, 240, 300, 0.3)";
            bubble.cS = "white";
            bubbles.push(bubble);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        seaworldcanvas.crc.clearRect(0, 0, canvas.width, canvas.height);
        seaworldcanvas.crc.putImageData(imageData, 0, 0);
        //Wasser
        seaworldcanvas.drawWaterGradient("#87CEFA", "#087CC4", canvas.width, canvas.height, 300, 1400, seaworldcanvas.crc);
        //Boden Hinten
        seaworldcanvas.drawBodenHinten("#C88937", 0, 500, seaworldcanvas.crc);
        //Pflanze hinten links
        seaworldcanvas.drawAlgeOne("#004d00", "transparent", 400, 510, seaworldcanvas.crc); //004d00
        seaworldcanvas.drawAlgeTwo("#006400", "transparent", 385, 530, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("#006400", "transparent", 430, 530, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("#00cc00", "transparent", 390, 560, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeTwo("#009900", "transparent", 395, 570, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("#00b300", "transparent", 420, 560, seaworldcanvas.crc);
        //Pflanze hinten rechts
        seaworldcanvas.drawAlgeOne("#375635", "transparent", 1350, 510, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeTwo("darkgreen", "transparent", 1325, 530, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("green", "transparent", 1330, 550, seaworldcanvas.crc);
        //  //Bubbles
        //  for (let i: number = 0; i < 400; i++) {
        //      let x: number = 10 + Math.random() * 1390;
        //      let y: number = Math.random() * 600;
        //      let r: number = Math.random() * (5 - 2) + 2;
        //      drawBubble("rgb(206, 240, 300, 0.3)", "white", x, y, r, crc);
        //  }
        //Boden Vorne
        seaworldcanvas.drawBodenVorne("#d9ad73", 0, 500, seaworldcanvas.crc);
        //Pflanze links
        seaworldcanvas.drawAlgeOne("darkgreen", "transparent", 40, 600, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeTwo("#375635", "transparent", 35, 620, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("green", "transparent", 60, 640, seaworldcanvas.crc);
        //Pflanze rechts
        seaworldcanvas.drawAlgeOne("darkgreen", "transparent", 1080, 600, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeTwo("#375635", "transparent", 1075, 620, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeOne("green", "transparent", 1100, 640, seaworldcanvas.crc);
        seaworldcanvas.drawAlgeTwo("#009900", "transparent", 1090, 660, seaworldcanvas.crc);
        for (let i = 0; i < fisch1.length; i++) {
            fisch1[i].update();
        }
        for (let i = 0; i < fisch2.length; i++) {
            fisch2[i].update();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].update();
        }
    }
})(seaworldcanvas || (seaworldcanvas = {})); //close namespace
//# sourceMappingURL=main.js.map