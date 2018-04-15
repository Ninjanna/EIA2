namespace Memory {
//_____________________________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", init);
    
    function init(): void {
        let pairs: string = prompt("Wie viele Kartenpaare (min5|max10)")
        let pairsSum: number = parseInt(pairs)
        
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("FALSCH")
            init();    
            }
        
            else {
                console.log("correct input");
                let player: string = prompt("Wie viele Spieler (min1|max4)")
                let playerSum: number = parseInt(player)
            
                if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                    alert("FALSCH")
                    init();    
                    }
            
                    else {
                        console.log("correct input");
                        createGame(pairsSum,playerSum);
                        }
                }
        }

//_____________________________________________________________________________________________________________________    
    
    function createGame(_pairs: number, _player: number): void {
        
        //header
        let head: HTMLElement = document.createElement("header")
            document.body.appendChild(head);
            console.log("load head");
        
        //H1
        let h: HTMLHeadingElement = document.createElement("h1");
            h.innerText = "Memory";
            head.appendChild(h);
            console.log("create headline");
        
        //call functions
        createMainboard(_pairs);
        
        createAside(_player);
        
        createFooter();
        
        }
    
 //_____________________________________________________________________________________________________________________    
     
    function createMainboard (_pairs: number): void {
        console.log("#call createMainboard");
        
        //main
        let mainboard: HTMLElement = document.createElement("main");
        document.body.appendChild(mainboard);
        console.log("load main");
        
        //kompletter Kontent
        let cardContent: string[] = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        console.log("total content " + cardContent);
        
        //neues array aus content in passender anzahl
        let cardContentNeeded: string [] = cardContent.slice( 0, _pairs); 
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
        for (let i: number = 0; i < cardContentNeeded.length; i++) {
            console.log(cardContentNeeded[i]);
            createCard(cardContentNeeded[i], mainboard, i);
            }
        }
    
//_____________________________________________________________________________________________________________________
    
    function doubleArray ( _cardContent: string[], _cardContentNeeded: string[], _pairs: number): void {
        console.log("#call doubleArray");
        
        for (let i: number = 0; i < _pairs; i++) {
            _cardContentNeeded.splice( 0, 0, _cardContent[i]);   
            console.log("Kartenpaar " + (i + 1) + ": " + _cardContent[i] + " & " + _cardContent[i]);
            }
        }
    
    function shuffleArray (_array: string[]): void {
        console.log("#call shuffleArray");
        
        let j: number = 0
        let temp: any = null
    
            for (let i: number = _array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1))
                temp = _array[i]
                _array[i] = _array[j]
                _array[j] = temp
                }
        }
        
    function createCard (_content: string, _place: HTMLElement, _index: number): void {
        console.log("#call createCard");
        
        let card: HTMLDivElement = document.createElement("div");
            _place.appendChild(card);
            console.log("load card " + (_index + 1) + " to mainboard");
        
        let content: HTMLParagraphElement = document.createElement("p");
            content.innerHTML = _content;
            card.appendChild(content);
            console.log("load content " + _content + " to mainboard");
        
        // fill with .css command
        
        }
   
//_____________________________________________________________________________________________________________________
    
    function createAside (_player: number): void {
        console.log("#call createAside"); 
        
        let info: HTMLElement = document.createElement("aside");
            document.body.appendChild(info);
            console.log("load aside");
        
        let h2: HTMLHeadingElement = document.createElement("h2");
            h2.innerHTML = "Spieler";
            info.appendChild(h2);
            console.log("load aside Heading: " + h2);
        
            for (let i: number = 0; i < _player; i++) {
                let box: HTMLFieldSetElement = document.createElement("fieldset");
                info.appendChild(box);
              
                let boxLegend: HTMLLegendElement = document.createElement("legend");
                boxLegend.innerHTML = "Spieler " + (i + 1) + ":";
                box.appendChild(boxLegend); 
                
                let boxContent: HTMLParagraphElement = document.createElement("p");
                boxContent.innerHTML = "Score: 0";
                box.appendChild(boxContent);
                console.log("create box for player " + (i + 1));
                }
        }
        
       
    function createFooter (): void {
        console.log("#call createFooter");
        
        let footer: HTMLElement = document.createElement("footer")
            document.body.appendChild(footer);
            console.log("load footer");
        
        let footerContent: HTMLParagraphElement = document.createElement("p");
            footerContent.innerHTML = "";
            footer.appendChild(footerContent);
            console.log("load footerContent");
        
        // fill with content
        
        }   
    
//_____________________________________________________________________________________________________________________    
    }