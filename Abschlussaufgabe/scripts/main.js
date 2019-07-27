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
    let currentScore = 0;
    let highScore = 0;
    let highScoreElement;
    let scoreElement;
    let nameElement;
    function spawnFish() {
        let rndm1 = Math.floor(Math.random() * colors4fish.length);
        let rndm2 = Math.floor(Math.random() * colors4fish.length);
        return new seaworld_inheritance.Fishy2(colors4fish[rndm1], colors4fish[rndm2]);
    }
    function init() {
        console.log("Hallo i bims");
        seaworld_inheritance.canvas = document.getElementsByTagName("canvas")[0];
        seaworld_inheritance.crc = seaworld_inheritance.canvas.getContext("2d");
        currentScore = 0;
        highScore = 0;
        highScoreElement = document.getElementById("highscore");
        highScoreElement.innerText = String(highScore);
        nameElement = document.getElementById("name");
        scoreElement = document.getElementById("score");
        scoreElement.innerText = String(currentScore);
        //EventListener für Futter
        seaworld_inheritance.canvas.addEventListener("click", mahlzeit);
        document.addEventListener("keydown", handleKeydown);
        seaworld_inheritance.crc.strokeStyle = "black";
        seaworld_inheritance.crc.strokeRect(0, 0, seaworld_inheritance.canvas.width, seaworld_inheritance.canvas.height);
        //Background
        seaworld_inheritance.drawBackground();
        imageData = seaworld_inheritance.crc.getImageData(0, 0, seaworld_inheritance.canvas.width, seaworld_inheritance.canvas.height);
        //Fishy1
        for (let i = 0; i < fishOneAnzahl; i++) {
            let fish2 = spawnFish();
            movingObjects.push(fish2);
        }
        seaworld_inheritance.playerFish = new seaworld_inheritance.PlayerFish("black");
        //Bubbles
        for (let i = 0; i < bubblesAnzahl; i++) {
            let bubble = new seaworld_inheritance.Bubbles();
            movingObjects.push(bubble);
        }
        update();
    }
    function intersectRect(a, b) {
        let aLeft = a[0];
        let aTop = a[1];
        let bLeft = b[0];
        let bTop = b[1];
        let aRight = aLeft + a[2];
        let bRight = bLeft + b[2];
        let aBottom = aTop + a[3];
        let bBottom = bTop + b[3];
        return Math.max(aLeft, bLeft) < Math.min(aRight, bRight) &&
            Math.max(aTop, bTop) < Math.min(aBottom, bBottom);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        seaworld_inheritance.crc.clearRect(0, 0, seaworld_inheritance.crc.canvas.width, seaworld_inheritance.crc.canvas.height);
        seaworld_inheritance.crc.putImageData(imageData, 0, 0);
        let playerFishRect = seaworld_inheritance.playerFish.getBoundingRect();
        for (let i = 0; i < movingObjects.length; i++) {
            //console.log(Math.abs(movingObjects[i].x - playerFish.x), Math.abs(movingObjects[i].y - playerFish.y), movingObjects[i].scale);
            //console.log(playerFish.x, playerFish.y, playerFish.scale);
            if (!(movingObjects[i].scale == null)) {
                let fishRect = movingObjects[i].getBoundingRect();
                //console.log(fishRect, " vs. ", playerFishRect);
                if (intersectRect(playerFishRect, fishRect)) {
                    if (movingObjects[i].scale > seaworld_inheritance.playerFish.scale) {
                        //console.log("Hit ", movingObjects[i].scale, " => Dead");
                        if (nameElement.value.length > 0) {
                            //DBClient.updatePlayerScore(nameElement.value, currentScore);
                            if (highScore == 0) {
                                DBClient.findByName(nameElement.value);
                            }
                        }
                        currentScore = 0;
                        scoreElement.innerText = String(currentScore);
                        seaworld_inheritance.playerFish = new seaworld_inheritance.PlayerFish("black");
                    }
                    else {
                        //console.log("Eat ", movingObjects[i].scale, " => Growing to ", playerFish.scale + 0.01);
                        currentScore += 1;
                        scoreElement.innerText = String(currentScore);
                        movingObjects[i] = spawnFish();
                        seaworld_inheritance.playerFish.scale += 0.01;
                        if (seaworld_inheritance.playerFish.scale > 2) {
                            seaworld_inheritance.playerFish.scale = 2;
                        }
                    }
                }
            }
        }
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
        }
        seaworld_inheritance.playerFish.update();
    }
    function mahlzeit(_event) {
        let x = _event.clientX - 17;
        let y = _event.clientY - 20;
        let n = 1 + Math.floor(Math.random() * 7);
        for (let i = 0; i < n; i++) {
            let rndm1 = Math.floor(Math.random() * colors4food.length);
            let food = new seaworld_inheritance.Foods(x, y, colors4food[rndm1]);
            movingObjects.push(food);
        }
    }
    function handleKeydown(_event) {
        if (_event.keyCode === 38) {
            // up arrow
            seaworld_inheritance.playerFish.dx = 0;
            seaworld_inheritance.playerFish.dy = -16;
        }
        else if (_event.keyCode === 40) {
            // down arrow
            seaworld_inheritance.playerFish.dx = 0;
            seaworld_inheritance.playerFish.dy = 16;
        }
        else if (_event.keyCode === 37) {
            // left arrow
            seaworld_inheritance.playerFish.dx = -16;
            seaworld_inheritance.playerFish.dy = 0;
        }
        else if (_event.keyCode === 39) {
            // right arrow
            seaworld_inheritance.playerFish.dx = +16;
            seaworld_inheritance.playerFish.dy = 0;
        }
    }
})(seaworld_inheritance || (seaworld_inheritance = {}));
//# sourceMappingURL=main.js.map