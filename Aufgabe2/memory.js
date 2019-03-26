var Memory;
(function (Memory) {
    //_____________________________________________________________________________________________________________________
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let pairs = prompt("Wie viele Kartenpaare (min5|max10)");
        let pairsSum = parseInt(pairs);
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("FALSCH");
            init();
        }
        else {
            console.log("correct input");
            let player = prompt("Wie viele Spieler (min1|max4)");
            let playerSum = parseInt(player);
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH");
                init();
            }
            else {
                console.log("correct input");
                createGame(pairsSum, playerSum);
            }
        }
    }
    //_____________________________________________________________________________________________________________________    
    function createGame(_pairs, _player) {
        //header
        let head = document.createElement("header");
        document.body.appendChild(head);
        console.log("load head");
        //H1
        let h = document.createElement("h1");
        h.innerText = "Memory";
        head.appendChild(h);
        console.log("create headline");
        //call functions
        createMainboard(_pairs);
        createAside(_player);
        createFooter();
    }
    //_____________________________________________________________________________________________________________________    
    function createMainboard(_pairs) {
        console.log("#call createMainboard");
        //main
        let mainboard = document.createElement("main");
        document.body.appendChild(mainboard);
        console.log("load main");
        //kompletter Kontent
        let cardContent = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        console.log("total content " + cardContent);
        //neues array aus content in passender anzahl
        let cardContentNeeded = cardContent.slice(0, _pairs);
        console.log("needed content " + cardContentNeeded);
        //double
        doubleArray(cardContent, cardContentNeeded, _pairs);
        console.log("doubled | needed content " + cardContentNeeded);
        //shuffle
        /*andere art zu shuffeln...aber die schlechtere
        cardContentNeeded.sort(function(){return 0.5 - Math.random()});*/
        shuffleArray(cardContentNeeded);
        console.log("doubled | needed | randomized content " + cardContentNeeded);
        console.log("Items in cardContentNeeded : " + cardContentNeeded.length);
        //create cards
        for (let i = 0; i < cardContentNeeded.length; i++) {
            console.log(cardContentNeeded[i]);
            createCard(cardContentNeeded[i], mainboard, i);
        }
    }
    //_____________________________________________________________________________________________________________________
    function doubleArray(_cardContent, _cardContentNeeded, _pairs) {
        console.log("#call doubleArray");
        for (let i = 0; i < _pairs; i++) {
            _cardContentNeeded.splice(0, 0, _cardContent[i]);
            console.log("Kartenpaar " + (i + 1) + ": " + _cardContent[i] + " & " + _cardContent[i]);
        }
    }
    function shuffleArray(_array) {
        console.log("#call shuffleArray");
        let j = 0;
        let temp = null;
        for (let i = _array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
    }
    function createCard(_content, _place, _index) {
        console.log("#call createCard");
        let card = document.createElement("div");
        _place.appendChild(card);
        console.log("load card " + (_index + 1) + " to mainboard");
        let content = document.createElement("p");
        content.innerHTML = _content;
        card.appendChild(content);
        console.log("load content " + _content + " to mainboard");
        // fill with .css command
    }
    //_____________________________________________________________________________________________________________________
    function createAside(_player) {
        console.log("#call createAside");
        let info = document.createElement("aside");
        document.body.appendChild(info);
        console.log("load aside");
        let h2 = document.createElement("h2");
        h2.innerHTML = "Spieler";
        info.appendChild(h2);
        console.log("load aside Heading: " + h2);
        for (let i = 0; i < _player; i++) {
            let box = document.createElement("fieldset");
            info.appendChild(box);
            let boxLegend = document.createElement("legend");
            boxLegend.innerHTML = "Spieler " + (i + 1) + ":";
            box.appendChild(boxLegend);
            let boxContent = document.createElement("p");
            boxContent.innerHTML = "Score: 0";
            box.appendChild(boxContent);
            console.log("create box for player " + (i + 1));
        }
    }
    function createFooter() {
        console.log("#call createFooter");
        let footer = document.createElement("footer");
        document.body.appendChild(footer);
        console.log("load footer");
        let footerContent = document.createElement("p");
        footerContent.innerHTML = "";
        footer.appendChild(footerContent);
        console.log("load footerContent");
        // fill with content
    }
    //_____________________________________________________________________________________________________________________    
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory.js.map