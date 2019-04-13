namespace Aufgabe2 {

document.addEventListener("DOMContentLoaded", abfrage);


let hand: string[] = [];
let ablage: string[] = [];

let nachziehstapel: string[] = [" ♥ 7", " ♥ 8", " ♥ 9", " ♥ 10", " ♥ Bube", " ♥ Dame", " ♥ König", " ♥ As",
                    " ♦ 7", " ♦ 8", " ♦ 9", " ♦ 10", " ♦ Bube", " ♦ Dame", " ♦ König", " ♦ As",
                    " ♣ 7", " ♣ 8", " ♣ 9", " ♣ 10", " ♣ Bube", " ♣ Dame", " ♣ König", " ♣ As",
                    " ♠ 7", " ♠ 8", " ♠ 9", " ♠ 10", " ♠ Bube", " ♠ Dame", " ♠ König", " ♠ As" ]


let handDiv:HTMLElement;
let nachziehstapelDiv:HTMLElement;
let ablagedDiv:HTMLElement; 

//nachziehstapelDiv.addEventListener('click', zieheKarte)
 
function abfrage(): void {
    handDiv = document.getElementById('handkarten'); // im html dokument das element handkarten by id abfragen
    nachziehstapelDiv = document.getElementById('nachziehstapel'); // im html dokument das element nachziehstapel by id abfragen
    nachziehstapelDiv.addEventListener('click', zieheKarte)
    ablagedDiv = document.getElementById('ablage'); // im html dokument das element ablage by id abfragen
    document.getElementById('sortierenTaste').onclick = handSortieren;

    document.addEventListener("keydown", leertaste);

    let handKartenAnzahl: number;
    do{
        let eingabe: number = parseInt(prompt("Mit wie vielen Karten wollen Sie spielen?", "2-10"));
        if(typeof eingabe == 'undefined'){
            //prüfen ob es ne richtige zahl ist weil parseInt bei strings wie "abc" undefined zurück gibt
            //undefined -> hat keinen wert, null -> definiert als nix --> unterschied! 
            // if(undefined == null)  ist true (value equals) (vergleicht wert, nix = nix -> true)
            // if(undefined === null) ist false (reference equals)  (vergleicht typ UND wert -> nich gleich) (typ undefined is der string "undefined, typ null = "null"; die beiden sind nich gleich)
            alert("Keine Zahl! Versuchen Sie es doch noch einmal");
        } else if (eingabe > 10) {
            alert("Maximal 10 Karten! Versuchen Sie es doch noch einmal.");
        } else if (eingabe < 2) {
            alert("Mindestens 2 Karten! Versuchen Sie es doch noch einmal.");     //wenn er in ein alert rein rutscht kommt er mit der while schleife wieder hoch und das ganze ding läd erneut
        }else{
            handKartenAnzahl = eingabe;
        }
    } while(!handKartenAnzahl); // handkarten = undefined (boolean = false), -> ! -> not false -> true solange handkarten keinen wert haben-> schleife nochmal

    kartenAusgabe(handKartenAnzahl);
    anzeigen();
}


 
function leertaste(_e: KeyboardEvent):void {
    if (_e.keyCode == 32) { //32.Code von Leertaste wird abgeprüft
        zieheKarte();
        
    }
    //console.log("e");
}
function kartenAusgabe(_handKartenAnzahl: number): void {
    for (let i: number = 0; i < _handKartenAnzahl; i++) {
        let kartenNr: number = Math.floor(Math.random() * nachziehstapel.length);
        hand.push(nachziehstapel[kartenNr]);
        nachziehstapel.splice(kartenNr, 1);
    };
}

function anzeigen(): void {
    for(let i = 0; i < hand.length; i++){
        let karte:string = hand[i];                                //erste karte als string holen
        let karteDiv:HTMLDivElement = erstelleNeueKarte(karte);       //neues div wird mit der erstelleNeueKarte funktion
        handDiv.appendChild(karteDiv); // element zum handDiv hinzufügen
    }
}

function erstelleNeueKarte(_karte:string) : HTMLDivElement{ 
    let karteDiv:HTMLDivElement = document.createElement('div');        //createElement erstellt neues element
    karteDiv.innerText = _karte;  // setzt den text der karte
    karteDiv.className = 'karte'; // setzt die klasse der karte = class="karte", damit alle karten im css angesprochen werden können
    // Resultat: <div class="karte">[KartenText]</div>


    karteDiv.addEventListener('click', spieleKarte);
    return karteDiv;
}

//-------------------------------------------------- Aufgabe 3 (noch in arbeit) -----------------------------------------------------------------

function zieheKarte() : void {
    if(nachziehstapel.length == 0)
        return; //sonst fehler wenn nachziehstapel leer

    let kartenNr: number = Math.floor(Math.random() * nachziehstapel.length); //random karte vom nachzieh stapel
    let karte:string = nachziehstapel[kartenNr];
    hand.push(karte);
    nachziehstapel.splice(kartenNr, 1);

    let karteDiv:HTMLDivElement = erstelleNeueKarte(karte); //erstelleNeueKarte erstellt neues element
    handDiv.appendChild(karteDiv); // element zum handDiv hinzufügen
}

 function spieleKarte(_event: Event ) : void {
     let karteDiv:HTMLDivElement = (<HTMLDivElement>_event.target);   // rausfinden auf welche karte geklickt wurde indem man das event holt
     let karte:string = karteDiv.innerText; //text dieser karte holen

     // karteDiv.removeEventListener('click', spieleKarte); nur für performance

     let kartenNr:number;
     for(let i:number = 0; i < hand.length; i++){
         if(hand[i] == karte)
             kartenNr = i;         //suche karte in der hand mit demselben namen wie die die grad gespielt wurde
     }

    
     hand.splice(kartenNr, 1); // Karte aus Hand entfernen
     handDiv.removeChild(karteDiv); // Karte aus HandDiv (HTML) entfernen
     ablage.push(karte); // Karte dem Ablagestapel hinzufügen

     ablagedDiv.innerText = karte; // text des ablagestabels = kartentext (wie bei erstelleNeueKarte)
 }

 function vergleiche(_a: string, _b: string) : number      //die beiden parameter gibts von .sort, er will 2 vergleichen 
 {                                                         //typ number: muss was negatives, 0 oder + rausgeben damit .sort weis was größer ist 
    // Farben
    let s1: string = _a.substr(0,2)          //.substr schneidet die ersten beiden zeichen ab (leerzeichen und farbe)
    let s2: string = _b.substr(0,2)           //von a UND b 
    if(s1 != s2)                  //leerzeichen + farbe können ganz normal verglichen werden
        if(s1 < s2)
            return 1
        else
            return 0

    // Bube, Dame, König, Ass -----------------Zusatz Aufgabe-------------------
    s1 = _a.substr(3)                 // B, D, und K haben alphabetisch schon die richtige reihenfolge. fehlt nur das Ass
    s2 = _b.substr(3)                //brauchen "ausnahmeregelung für vergleich von BDKA" 
    let a: number = parseInt(s1)       //versuchen dafür beide strings in ints umzuwandeln...
    let b: number = parseInt(s2)
    if(isNaN(a) && isNaN(b))         //...nur wenns beide male nicht geht vergleichet man zwei mal BDKA
    {
        if(s1 == "As")             //As wird zu Z
            s1 = "Z"
        if(s2 == "As")
            s2 = "Z"
        if(s1 > s2)             //sobald As=Z kann man es normal vergleichen, da BDK<Z
            return 1             // 1 -> a>b
        else 
            return 0            //0 -> a<=b
    }

    s1 = _a.substr(3)         //verl. zwei zahlen
    s2 = _b.substr(3)
    // Numbers
    a = parseInt(s1)        //wie oben bei zu ints
    b = parseInt(s2)
    if(!isNaN(a) && !isNaN(b))       //nur wenn beide ints sind...
        return a - b                // return ist was negatives (3-5 = -2 -> negativ -> a<b -> 3<5 -> true :)

    if(s1 > s2)                  //vergl. zahl mit BDKA, zahl < buchstabe immer
        return 1                 // a>b -> a größer -> return was positives

    return 0              // a<=b
 }

function handSortieren(): void{  //default operator funktioniert bei dem string zeug nich -> eigene vergleich-funktion
                                //.sort(function(a, b){return a-b}) (w3schools) -> .sort gibt <0 wenn a<b,0 wenn a=b, >0 wenn a>b 
    hand.sort(vergleiche);     //eigene fnkt: vergleiche: gibt eine eigene sortier logik vor, sagt .sort wann etwas größer/kleiner ist -> gut für bube, dame etc.
                              //sort ruft vergleiche auf um 2 elemente zu vergleichen

    for(let i = 0; i < handDiv.children.length; i++){
        (<HTMLDivElement>handDiv.children[i]).innerText = hand[i];
    }
}
} 



