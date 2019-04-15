var Aufgabe2;
(function (Aufgabe2) {
    document.addEventListener("DOMContentLoaded", abfrage);
    let hand = [];
    let ablage = [];
    let nachziehstapel = [" ♥ 7", " ♥ 8", " ♥ 9", " ♥ 10", " ♥ Bube", " ♥ Dame", " ♥ König", " ♥ As",
        " ♦ 7", " ♦ Raute 8", " ♦ 9", " ♦ 10", " ♦ Bube", " ♦ Dame", " ♦ König", " ♦ As",
        " ♣ 7", " ♣ 8", " ♣ 9", " ♣ 10", " ♣ Bube", " ♣ Dame", " ♣ König", " ♣ As",
        " ♠ 7", " ♠ 8", " ♠ 9", " ♠ 10", " ♠ Bube", " ♠ Dame", " ♠ König", " ♠ As"];
    //♥ ♦ ♣ ♠
    let handDiv;
    let nachziehstapelDiv;
    let ablagedDiv;
    function abfrage() {
        handDiv = document.getElementById('handkarten'); // im html dokument das element handkarten by id abfragen
        nachziehstapelDiv = document.getElementById('nachziehstapel'); // im html dokument das element nachziehstapel by id abfragen
        nachziehstapelDiv.addEventListener('click', zieheKarte);
        ablagedDiv = document.getElementById('ablage'); // im html dokument das element ablage by id abfragen
        document.getElementById("sortierenTaste").addEventListener("click", handSortieren);
        document.addEventListener("keydown", leertaste);
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
    function leertaste(_e) {
        if (_e.keyCode == 32) { //32.Code von Leertaste wird abgeprüft
            zieheKarte();
        }
        //console.log("e");
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
        karteDiv.addEventListener('click', spieleKarte);
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
        let karteDiv = erstelleNeueKarte(karte); //erstelleNeueKarte erstellt neues element
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
        hand.splice(kartenNr, 1); // Karte aus Hand entfernen
        handDiv.removeChild(karteDiv); // Karte aus HandDiv (HTML) entfernen
        ablage.push(karte); // Karte dem Ablagestapel hinzufügen
        ablagedDiv.innerText = karte; // text des ablagestabels = kartentext (wie bei erstelleNeueKarte)
    }
    function vergleiche(_a, _b) {
        //typ number: muss was negatives, 0 oder + rausgeben damit .sort weis was größer ist 
        // Farben
        let s1 = _a.substr(0, 2); //.substr schneidet die ersten beiden zeichen ab (leerzeichen und farbe)
        let s2 = _b.substr(0, 2); //von a UND b 
        if (s1 != s2) { //leerzeichen + farbe können ganz normal verglichen werden
            if (s1 < s2)
                return -1;
            else
                return 1;
        }
        // Bube, Dame, König, Ass -----------------Zusatz Aufgabe-------------------
        s1 = _a.substr(3); // B, D, und K haben alphabetisch schon die richtige reihenfolge. fehlt nur das Ass
        s2 = _b.substr(3); //brauchen "ausnahmeregelung für vergleich von BDKA" 
        let a = parseInt(s1); //versuchen dafür beide strings in ints umzuwandeln...
        let b = parseInt(s2);
        if (isNaN(a) && isNaN(b)) //...nur wenns beide male nicht geht vergleichet man zwei mal BDKA
         {
            if (s1 == "As") //As wird zu Z
                s1 = "Z";
            if (s2 == "As")
                s2 = "Z";
            if (s1 < s2) //sobald As=Z kann man es normal vergleichen, da BDK<Z
                return -1; // 1 -> a>b
            else
                return 1; //0 -> a<=b
        }
        s1 = _a.substr(3); //verl. zwei zahlen
        s2 = _b.substr(3);
        // Numbers
        a = parseInt(s1); //wie oben bei zu ints
        b = parseInt(s2);
        if (!isNaN(a) && !isNaN(b)) //nur wenn beide ints sind...
            return a - b; // return ist was negatives (3-5 = -2 -> negativ -> a<b -> 3<5 -> true :)
        if (s1 < s2) //vergl. zahl mit BDKA, zahl < buchstabe immer
            return -1; // a>b -> a größer -> return was positives
        else if (s1 > s2)
            return 1;
        return 0;
    }
    // let sortierenTasteDiv:HTMLElement;
    //     console.log("kuku345")
    //     sortierenTasteDiv = document.getElementById('sortierenTaste'); // im html dokument das element nachziehstapel by id abfragen
    //     sortierenTasteDiv.addEventListener('click', handSortieren)
    //     //document.getElementById('sortierenTaste').onclick = handSortieren;
    function handSortieren() {
        //console.log(hand)
        //.sort(function(a, b){return a-b}) (w3schools) -> .sort gibt <0 wenn a<b,0 wenn a=b, >0 wenn a>b 
        hand.sort(vergleiche); //eigene fnkt: vergleiche: gibt eine eigene sortier logik vor, sagt .sort wann etwas größer/kleiner ist -> gut für bube, dame etc.
        //sort ruft vergleiche auf um 2 elemente zu vergleichen
        //console.log(hand)
        for (let i = 0; i < handDiv.children.length; i++) {
            handDiv.children[i].innerText = hand[i];
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=maumau3.js.map