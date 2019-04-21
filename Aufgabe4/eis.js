var Eis;
(function (Eis) {
    window.addEventListener("load", init);
    let gesammtPreis = 0;
    function init() {
        console.log("I'm working! :D ");
        document.getElementById("sorteButton").addEventListener("click", sorteAnzeigen);
        document.getElementById("streusel").addEventListener("click", anzeigenZusatz);
        document.getElementById("sahne").addEventListener("click", anzeigenZusatz);
        document.getElementById("karamel").addEventListener("click", anzeigenZusatz);
        document.getElementById("becher").addEventListener("click", anzeigenForm);
        document.getElementById("waffel").addEventListener("click", anzeigenForm);
        document.getElementById("schokowaffel").addEventListener("click", anzeigenForm);
        document.getElementById("button").addEventListener("click", pruefenUndBestellen);
    }
    function preisAktualisieren(_beitrag) {
        gesammtPreis += _beitrag;
        let preisElement = document.getElementById("price");
        preisElement.innerText = gesammtPreis.toString();
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
        preisAktualisieren(1.0);
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
            preisAktualisieren(0.50);
        }
        else {
            let zusatzListe = document.getElementById(checkVal); // beim unchecken...
            zusatzListe.parentNode.removeChild(zusatzListe); //....removen
            preisAktualisieren(-0.50);
        }
    }
    function anzeigenForm(_event) {
        let check = _event.target; // rausfinden auf welche karte geklickt wurde indem man das event holt
        if (check.checked) {
            let checkVal = check.value; //text dieser karte holen
            let formWahl = document.getElementById("formwahl");
            formWahl.innerText = check.value;
        }
    }
    function pruefeFelder(_elementId, _nachricht) {
        let element = document.getElementById(_elementId);
        if (element.value.length == 0) {
            alert(_nachricht);
            return false;
        }
        return true;
    }
    function pruefeListen(_listeId, _nachricht) {
        let element = document.getElementById(_listeId);
        if (element.children.length == 0) {
            alert(_nachricht);
            return false;
        }
        return true;
    }
    function pruefenUndBestellen() {
        if (!pruefeListen("sorteliste", "Du musst deine Sorte waehlen"))
            return;
        if (!pruefeFelder("Name", "Du muss den Namen eingeben"))
            return; //damit nich 1000 alerts kommen
        if (!pruefeFelder("Stadt", "Du musst deine Stadt eingeben"))
            return;
        if (!pruefeFelder("Postleitzahl", "Du muss deine Postleitzahl eingeben"))
            return;
        if (!pruefeFelder("Adresse", "Du musst deine Strasse eingeben"))
            return;
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=eis.js.map