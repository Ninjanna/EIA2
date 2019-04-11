document.addEventListener("DOMContentLoaded", abfrage);
let hand = [];
let ablage = [];
let nachziehstapel = [" ♥ 7", " ♥ 8", " ♥ 9", " ♥ 10", " ♥ Bube", " ♥ Dame", " ♥ König", " ♥ As",
    " ♦ 7", " ♦ 8", " ♦ 9", " ♦ 10", " ♦ Bube", " ♦ Dame", " ♦ König", " ♦ As",
    " ♣ 7", " ♣ 8", " ♣ 9", " ♣ 10", " ♣ Bube", " ♣ Dame", " ♣ König", " ♣ As",
    " ♠ 7", " ♠ 8", " ♠ 9", " ♠ 10", " ♠ Bube", " ♠ Dame", " ♠ König", " ♠ As"];
let handDiv;
let nachziehstapelDiv;
let ablagedDiv;
function abfrage() {
    handDiv = document.getElementById('handkarten'); // im html dokument das element handkarten by id abfragen
    nachziehstapelDiv = document.getElementById('nachziehstapel'); // im html dokument das element nachziehstapel by id abfragen
    ablagedDiv = document.getElementById('ablage'); // im html dokument das element ablage by id abfragen
    // für Aufgabe 3: nachziehstapelDiv.addEventListener('click', zieheKarte)
    let handKartenAnzahl;
    do {
        let eingabe = parseInt(prompt("Mit wie vielen Karten wollen Sie spielen?", "2-10"));
        if (typeof eingabe == 'undefined') {
            //prüfen ob es ne richtige zahl ist weil parseInt bei strings wie "abc" undefined zurück gibt
            //undefined -> hat keinen wert, null -> definiert als nix --> unterschied! 
            // if(undefined == null)  ist true (value equals) (vergleicht wert, nix = nix -> true)
            // if(undefined === null) ist false (reference equals)  (vergleicht typ UND wert -> nich gleich) (typ undefined is der string "undefined, typ null = "null"; die beiden sind nich gleich)
            alert("Keine Zahl! Versuchen Sie es doch noch einmal");
        }
        else if (eingabe > 10) {
            alert("Maximal 10 Karten! Versuchen Sie es doch noch einmal.");
        }
        else if (eingabe < 2) {
            alert("Mindestens 2 Karten! Versuchen Sie es doch noch einmal."); //wenn er in ein alert rein rutscht kommt er mit der while schleife wieder hoch und das ganze ding läd erneut
        }
        else {
            handKartenAnzahl = eingabe;
        }
    } while (!handKartenAnzahl); // handkarten = undefined (boolean = false), -> ! -> not false -> true solange handkarten keinen wert haben-> schleife nochmal
    kartenAusgabe(handKartenAnzahl);
    anzeigen();
}
function kartenAusgabe(_handKartenAnzahl) {
    for (let i = 0; i < _handKartenAnzahl; i++) {
        let kartenNr = Math.floor(Math.random() * nachziehstapel.length);
        hand.push(nachziehstapel[kartenNr]);
        nachziehstapel.splice(kartenNr, 1);
    }
    ;
}
function anzeigen() {
    for (let i = 0; i < hand.length; i++) {
        let karte = hand[i]; //erste karte als string holen
        let karteDiv = erstelleNeueKarte(karte); //neues div wird mit der erstelleNeueKarte funktion
        handDiv.appendChild(karteDiv); // element zum handDiv hinzufügen
    }
}
function erstelleNeueKarte(_karte) {
    let karteDiv = document.createElement('div'); //createElement erstellt neues element
    karteDiv.innerText = _karte; // setzt den text der karte
    karteDiv.className = 'karte'; // setzt die klasse der karte = class="karte", damit alle karten im css angesprochen werden können
    // Resultat: <div class="karte">[KartenText]</div>
    // für Aufgabe 3: karteDiv.addEventListener('click', spieleKarte);
    return karteDiv;
}
//-------------------------------------------------- Aufgabe 3 (noch in arbeit) -----------------------------------------------------------------
function zieheKarte() {
    if (nachziehstapel.length == 0)
        return; //sonst fehler wenn nachziehstapel leer
    let kartenNr = Math.floor(Math.random() * nachziehstapel.length); //random karte vom nachzieh stapel
    let karte = nachziehstapel[kartenNr];
    hand.push(karte);
    nachziehstapel.splice(kartenNr, 1);
    let karteDiv = createCard(karte); //createElement erstellt neues element
    handDiv.appendChild(karteDiv); // element zum handDiv hinzufügen
}
function spieleKarte(_event) {
    let karteDiv = _event.target; // rausfinden auf welche karte geklickt wurde indem man das event holt
    let karte = karteDiv.innerText; //text dieser karte holen
    // karteDiv.removeEventListener('click', spieleKarte); nur für performance
    let kartenNr;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] == karte)
            kartenNr = i; //suche karte in der hand mit demselben namen wie die die grad gespielt wurde
    }
    // Das gleiche wie oben nur einfacher let kartenNr:number = hand.findIndex(function(k:string){ return k === karte}); // Suche den index der karte in der hand
    hand.splice(kartenNr, 1); // Karte aus Hand entfernen
    handDiv.removeChild(karteDiv); // Karte aus HandDiv (HTML) entfernen
    ablage.push(karte); // Karte dem Ablagestapel hinzufügen
    ablagedDiv.innerText = karte; // text des ablagestabels = kartentext (siehe bei createCard für erklärung)
}
function handSortieren() {
    console.log(hand);
    hand.sort();
    console.log(hand);
    // function(a:string, b:string){
    //     let aSymbol:string = a.substring(1,2);
    //     let bSymbol:string = b.substring(1,2);
    //     let result:number = aSymbol.localeCompare(bSymbol);
    //     if(result == 0){
    //         let aValue:string = a.substring(3);
    //         let bValue:string = a.substring(3);
    //         result = aValue.localeCompare(bValue);
    //     }
    //     return result;
    // }
    console.log(handDiv);
    for (let i = 0; i < handDiv.children.length; i++) {
        console.log('lol');
        handDiv.children[0].innerText = hand[i];
    }
}
//# sourceMappingURL=maumau.js.map