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
    export let playerFish: PlayerFish;

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

    let currentScore: number = 0;
    let highScore: number = 0;
    let highScoreElement: HTMLElement;
    let scoreElement: HTMLElement;
    let nameElement: HTMLInputElement;

    function spawnFish(): MovingObjects {
        let rndm1: number = Math.floor(Math.random() * colors4fish.length);
        let rndm2: number = Math.floor(Math.random() * colors4fish.length);
        return new Fishy2(colors4fish[rndm1], colors4fish[rndm2]);
    }

    function init(): void {
        console.log("Hallo i bims");
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        currentScore = 0;
        highScore = 0;
        highScoreElement = document.getElementById("highscore");
        highScoreElement.innerText = String(highScore);
        nameElement = <HTMLInputElement>document.getElementById("name");

        scoreElement = document.getElementById("score");
        scoreElement.innerText = String(currentScore);

        //EventListener für Futter
        canvas.addEventListener("click", mahlzeit);
        document.addEventListener("keydown", handleKeydown);

        crc.strokeStyle = "black";
        crc.strokeRect(0, 0, canvas.width, canvas.height);

        //Background
        drawBackground();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Fishy1
        for (let i: number = 0; i < fishOneAnzahl; i++) {
            let fish2: MovingObjects = spawnFish();
            movingObjects.push(fish2);
        }

        playerFish = new PlayerFish("black");

        //Bubbles
        for (let i: number = 0; i < bubblesAnzahl; i++) {
            let bubble: Bubbles = new Bubbles();
            movingObjects.push(bubble);
        }

        update();

    }

    function intersectRect(a: number[], b: number[]): boolean {
        let aLeft: number = a[0];
        let aTop: number = a[1];
        let bLeft: number = b[0];
        let bTop: number = b[1];
        let aRight: number = aLeft + a[2];
        let bRight: number = bLeft + b[2];
        let aBottom: number = aTop + a[3];
        let bBottom: number = bTop + b[3];
        return Math.max(aLeft, bLeft) < Math.min(aRight, bRight) &&
                Math.max(aTop, bTop) < Math.min(aBottom, bBottom);
      }

    function update(): void {
        window.setTimeout(update, 1000 / fps);

        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        crc.putImageData(imageData, 0, 0);

        let playerFishRect: number[] = playerFish.getBoundingRect();

        for (let i: number = 0; i < movingObjects.length; i++) {
            //console.log(Math.abs(movingObjects[i].x - playerFish.x), Math.abs(movingObjects[i].y - playerFish.y), movingObjects[i].scale);
            //console.log(playerFish.x, playerFish.y, playerFish.scale);
            if (!(movingObjects[i].scale == null)) {
                let fishRect: number[] = movingObjects[i].getBoundingRect();   
                //console.log(fishRect, " vs. ", playerFishRect);
                if (intersectRect(playerFishRect, fishRect)) {
                    if (movingObjects[i].scale > playerFish.scale) {
                        //console.log("Hit ", movingObjects[i].scale, " => Dead");
                        //if (nameElement.value.length > 0) {
                        if (nameElement.value == "zxcv") {
                            //DBClient.updatePlayerScore(nameElement.value, currentScore);
                            if (highScore == 0) {
                                highScore = parseInt(highScoreElement.innerText);
                                if (highScore == 0) {
                                    DBClient.findByName(nameElement.value);
                                }
                                //console.log("HS: ", highScore);
                                if (currentScore > highScore) {
                                    highScore = currentScore;
                                    highScoreElement.innerText = String(highScore);
                                    DBClient.updatePlayerScore(nameElement.value, highScore);
                                }
                            } 
                        }

                        currentScore = 0;
                        scoreElement.innerText = String(currentScore);
                        playerFish = new PlayerFish("black");
                    }
                    else {
                        //console.log("Eat ", movingObjects[i].scale, " => Growing to ", playerFish.scale + 0.01);
                        currentScore += 1;
                        scoreElement.innerText = String(currentScore);
                        movingObjects[i] = spawnFish(); 
                        playerFish.scale += 0.01;                        
                        if (playerFish.scale > 2) {
                            playerFish.scale = 2;
                        }
                    }
                }
            }
        }


        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
        }
        playerFish.update();

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

    function handleKeydown(_event: KeyboardEvent): void {
        if (_event.keyCode === 38) {
            // up arrow
            playerFish.dx = 0;
            playerFish.dy = -16;
        }
        else if (_event.keyCode === 40) {
            // down arrow
            playerFish.dx = 0;
            playerFish.dy = 16;
        }
        else if (_event.keyCode === 37) {
           // left arrow
           playerFish.dx = -16;
           playerFish.dy = 0;
        }
        else if (_event.keyCode === 39) {
           // right arrow
           playerFish.dx = +16;
           playerFish.dy = 0;
        }
    }

}
