/*
Aufgabe 11: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworldcanvas {

    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fisch1: Fishy[] = [];
    let fisch2: Fishy2[] = [];
    let bubbles: Bubbles[] = [];
    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        console.log("hallo ich arbeite");
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        crc.strokeStyle = "black";
        crc.strokeRect(0, 0, canvas.width, canvas.height);

       
        //color Array     
        let colors4fish: string[] = ["MediumOrchid ", "MediumVioletRed", "Orange", "OrangeRed", "Tomato", "Yellow", "Red", "Magenta", "Gold", "Crimson", "DarkMagenta"];

        //Fish One
        for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10 + 1;

            let rndm1: number = Math.floor(Math.random() * colors4fish.length);
            let rndm2: number = Math.floor(Math.random() * colors4fish.length);
            let fish: Fishy;
            fish = new Fishy();
            fish.x = x;
            fish.y = y;
            fish.c1 = colors4fish[rndm1];
            fish.c2 = colors4fish[rndm2];
            fish.dx = dx;
            fisch1.push(fish);
        }

        //Fish Two
        for (let i: number = 0; i < 25; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10 + 1;

            let rndm1: number = Math.floor(Math.random() * colors4fish.length);
            let rndm2: number = Math.floor(Math.random() * colors4fish.length);
            let fish2: Fishy2;
            fish2 = new Fishy2();
            fish2.x = x;
            fish2.y = y;
            fish2.c1 = colors4fish[rndm1];
            fish2.c2 = colors4fish[rndm2];
            fish2.dx = dx;
            fisch2.push(fish2);
        }
        //Bubbles
        for (let i: number = 0; i < 40; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * 1;

            let bubble: Bubbles;
            bubble = new Bubbles();
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
    
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        //Wasser
        drawWaterGradient("#87CEFA", "#087CC4", canvas.width, canvas.height, 300, 1400, crc);

        //Boden Hinten
        drawBodenHinten("#C88937", 0, 500, crc);

        //Pflanze hinten links
        drawAlgeOne("#004d00", "transparent", 400, 510, crc);  //004d00
        drawAlgeTwo("#006400", "transparent", 385, 530, crc);
        drawAlgeOne("#006400", "transparent", 430, 530, crc);
        drawAlgeOne("#00cc00", "transparent", 390, 560, crc);
        drawAlgeTwo("#009900", "transparent", 395, 570, crc);
        drawAlgeOne("#00b300", "transparent", 420, 560, crc);

        //Pflanze hinten rechts
        drawAlgeOne("#375635", "transparent", 1350, 510, crc);
        drawAlgeTwo("darkgreen", "transparent", 1325, 530, crc);
        drawAlgeOne("green", "transparent", 1330, 550, crc);

//  //Bubbles
//  for (let i: number = 0; i < 400; i++) {
//      let x: number = 10 + Math.random() * 1390;
//      let y: number = Math.random() * 600;
//      let r: number = Math.random() * (5 - 2) + 2;
//      drawBubble("rgb(206, 240, 300, 0.3)", "white", x, y, r, crc);
//  }

        //Boden Vorne
        drawBodenVorne("#d9ad73", 0, 500, crc);


        //Pflanze links
        drawAlgeOne("darkgreen", "transparent", 40, 600, crc);
        drawAlgeTwo("#375635", "transparent", 35, 620, crc);
        drawAlgeOne("green", "transparent", 60, 640, crc);

        //Pflanze rechts
        drawAlgeOne("darkgreen", "transparent", 1080, 600, crc);
        drawAlgeTwo("#375635", "transparent", 1075, 620, crc);
        drawAlgeOne("green", "transparent", 1100, 640, crc);
        drawAlgeTwo("#009900", "transparent", 1090, 660, crc);

        for (let i: number = 0; i < fisch1.length; i++) {
            fisch1[i].update();
        }
        for (let i: number = 0; i < fisch2.length; i++) {
            fisch2[i].update(); 
        }
        for (let i: number = 0; i < bubbles.length; i++) {
             bubbles[i].update();
        }
    
    }


}//close namespace