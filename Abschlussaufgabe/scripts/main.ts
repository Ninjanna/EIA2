/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 23.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworld_inheritance {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imageData: ImageData;
    let fps: number = 30;

    let movingObjects: MovingObjects[] = [];

    let colors4fish: string[] = [
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

    let colors4food: string[] = [
        "Olive",
        "DarkOliveGreen",
        "MediumSeaGreen",
        "DarkSeaGreen"

    ];

    let fishOneAnzahl: number = 25;
    let fishTwoAnzahl: number = 25;
    let bubblesAnzahl: number = 50;


    function init(): void {
        console.log("hallo ich arbeite");
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        //EventListener für Futter
        canvas.addEventListener("click", mahlzeit);

        crc.strokeStyle = "black";
        crc.strokeRect(0, 0, canvas.width, canvas.height);

        //Background
        drawBackground();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Fishy1
        for (let i: number = 0; i < fishOneAnzahl; i++) {
            let rndm1: number = Math.floor(Math.random() * colors4fish.length);
            let rndm2: number = Math.floor(Math.random() * colors4fish.length)
            let fish1: Fishy1 = new Fishy1(colors4fish[rndm1], colors4fish[rndm2]);
            movingObjects.push(fish1);
        }

        //Fishy2
        for (let i: number = 0; i < fishTwoAnzahl; i++) {
            let rndm1: number = Math.floor(Math.random() * colors4fish.length);
            let rndm2: number = Math.floor(Math.random() * colors4fish.length)
            let fish2: Fishy2 = new Fishy2(colors4fish[rndm1], colors4fish[rndm2]);
            movingObjects.push(fish2);
        }

        //Bubbles
        for (let i: number = 0; i < bubblesAnzahl; i++) {
            let bubble: Bubbles = new Bubbles();
            movingObjects.push(bubble);
        }

        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);

        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
        }

    }

    function mahlzeit(_event: MouseEvent): void {
        let x: number = _event.clientX - 17;
        let y: number = _event.clientY - 20;

        let n: number = 1 + Math.floor(Math.random() * 7);

        for (let i: number = 0; i < n; i++) {
            let rndm1: number = Math.floor(Math.random() * colors4food.length);
            let food: Foods = new Foods(x, y, colors4food[rndm1]);
            movingObjects.push(food);
        }

    }

}