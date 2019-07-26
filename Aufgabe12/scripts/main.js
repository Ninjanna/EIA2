/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var seaworld_inheritance1;
(function (seaworld_inheritance1) {
    window.addEventListener("load", init);
    let imageData;
    let fps = 30;
    let movingObjects = [];
    let colors4fish = [
        "MediumOrchid ",
        "MediumVioletRed",
        "Orange",
        "OrangeRed",
        "Tomato",
        "Yellow",
        "Red",
        "Magenta",
        "Gold",
        "Crimson",
        "DarkMagenta"
    ];
    let colors4food = [
        "Olive",
        "DarkOliveGreen",
        "MediumSeaGreen",
        "DarkSeaGreen"
    ];
    let fishOneAnzahl = 25;
    let fishTwoAnzahl = 25;
    let bubblesAnzahl = 50;
    function init() {
        console.log("hallo ich arbeite");
        seaworld_inheritance1.canvas = document.getElementsByTagName("canvas")[0];
        seaworld_inheritance1.crc = seaworld_inheritance1.canvas.getContext("2d");
        //EventListener für Futter
        seaworld_inheritance1.canvas.addEventListener("click", mahlzeit);
        seaworld_inheritance1.crc.strokeStyle = "black";
        seaworld_inheritance1.crc.strokeRect(0, 0, seaworld_inheritance1.canvas.width, seaworld_inheritance1.canvas.height);
        //Background
        drawBackground();
        imageData = seaworld_inheritance1.crc.getImageData(0, 0, seaworld_inheritance1.canvas.width, seaworld_inheritance1.canvas.height);
        //Fishy1
        for (let i = 0; i < fishOneAnzahl; i++) {
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let fish1 = new Fishy1(colors4fish[rndm1], colors4fish[rndm2]);
            movingObjects.push(fish1);
        }
        //Fishy2
        for (let i = 0; i < fishTwoAnzahl; i++) {
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let fish2 = new seaworld_inheritance1.Fishy2(colors4fish[rndm1], colors4fish[rndm2]);
            movingObjects.push(fish2);
        }
        //Bubbles
        for (let i = 0; i < bubblesAnzahl; i++) {
            let bubble = new seaworld_inheritance1.Bubbles();
            movingObjects.push(bubble);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        seaworld_inheritance1.crc.clearRect(0, 0, seaworld_inheritance1.crc.canvas.width, seaworld_inheritance1.crc.canvas.height);
        seaworld_inheritance1.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
        }
    }
    function mahlzeit(_event) {
        let x = _event.clientX - 17;
        let y = _event.clientY - 20;
        let n = 1 + Math.floor(Math.random() * 7);
        for (let i = 0; i < n; i++) {
            let rndm1 = Math.floor(Math.random() * colors4food.length);
            let food = new Foods(x, y, colors4food[rndm1]);
            movingObjects.push(food);
        }
    }
})(seaworld_inheritance1 || (seaworld_inheritance1 = {}));
//# sourceMappingURL=main.js.map