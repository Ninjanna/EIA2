var Eis;
(function (Eis) {
    window.addEventListener("load", init);
    function init() {
        console.log("I'm working! :D ");
        document.getElementById("sorteButton").addEventListener("click", sorteAnzeigen);
        document.getElementById("streusel").addEventListener("click", anzeigenZusatz);
        document.getElementById("sahne").addEventListener("click", anzeigenZusatz);
        document.getElementById("karamel").addEventListener("click", anzeigenZusatz);
    }
    function sorteAnzeigen() {
        console.log("huhu");
        let sorte = document.getElementById("sorte"); // hier wird ein type cast gemacht: getElementById gibt ein HTMLELEMENT, aber weir wissen es hat select, deswegen <cast magic>
        //w3schools:HTMLSelectElement/<select>: hat attribute. value gibt value (also schoki nich schokolade)
        console.log(sorte.value);
        console.log(sorte.options[sorte.selectedIndex].text); //das gibt den namen nach value weil: .options liefernt ein array mit allen optionen. davon nehmen wir (mim index []) die wo grad ausgewählt ist (selectedIndex)
        //das gäbe aber <option value="Schoki">Schokolade</option>, deswegen am ende noch .text
        let sorteliste = document.getElementById("sorteliste");
        let liNode = document.createElement("LI"); //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
        liNode.innerText = sorte.options[sorte.selectedIndex].text; //wie man ne liste befüllt ^
        sorteliste.appendChild(liNode);
    }
    function anzeigenZusatz(_event) {
        let check = _event.target; // rausfinden auf welche karte geklickt wurde indem man das event holt
        let checkVal = check.value; //text dieser karte holen
        if (check.checked) {
            let zusatzListe = document.getElementById("zusatzliste");
            let liNode = document.createElement("LI"); //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
            liNode.innerText = checkVal; //wie man ne liste befüllt ^
            liNode.id = checkVal;
            zusatzListe.appendChild(liNode); //das gecheckte der liste hinzufügen
        }
        else {
            let zusatzListe = document.getElementById(checkVal); // beim unchecken...
            zusatzListe.parentNode.removeChild(zusatzListe); //....removen
        }
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=eis.js.map