var Eis;
(function (Eis) {
    window.addEventListener("load", init);
    let address = "https://eisapp.herokuapp.com";
    let url = "";
    //document.getElementById("abschicken").addEventListener("click", abschicken);
    let gesammtPreis = 0;
    function abschicken() {
    }
    function init() {
        console.log("I'm working! :D ");
        document.getElementById("sorteButton").addEventListener("click", sorteAnzeigen);
        document.getElementById("deleteSorteButton").addEventListener("click", deleteLast);
        // document.getElementById("streusel").addEventListener("click", anzeigenZusatz);
        // document.getElementById("sahne").addEventListener("click", anzeigenZusatz);
        // document.getElementById("karamel").addEventListener("click", anzeigenZusatz);
        // document.getElementById("becher").addEventListener("click", anzeigenForm);
        // document.getElementById("waffel").addEventListener("click", anzeigenForm);
        // document.getElementById("schokowaffel").addEventListener("click", anzeigenForm);
        document.getElementById("button").addEventListener("click", pruefenUndBestellen);
        sortenAuswahl(Eis.sortenListe);
        zusatzChecks(Eis.zusatzListe);
        formRadio(Eis.formListe);
    }
    function deleteLast() {
        let parentNode = document.getElementById("sorteliste");
        if (gesammtPreis === 0) {
            return;
        }
        let sorte = document.getElementById("sorte");
        let price = parseFloat(sorte.options[sorte.selectedIndex].getAttribute("preis"));
        let neuerPreis = 0 - price;
        preisAktualisieren(neuerPreis);
        parentNode.lastChild.remove();
    }
    function preisAktualisieren(_beitrag) {
        gesammtPreis += _beitrag;
        let preisElement = document.getElementById("price");
        preisElement.innerText = gesammtPreis.toFixed(2); //nur 2 nachkommastellen beim preis, sonst 1,000000000....
    }
    function sorteAnzeigen() {
        //console.log("huhu")
        let sorte = document.getElementById("sorte"); // hier wird ein type cast gemacht: getElementById gibt ein HTMLELEMENT, aber weir wissen es hat select, deswegen <cast magic>
        //w3schools:HTMLSelectElement/<select>: hat attribute. value gibt value (also schoki nich schokolade)
        console.log(sorte.value);
        console.log(sorte.options[sorte.selectedIndex].text); //das gibt den namen nach value weil: .options liefernt ein array mit allen optionen. davon nehmen wir (mim index []) die wo grad ausgewählt ist (selectedIndex)
        //das gäbe aber <option value="Schoki">Schokolade</option>, deswegen am ende noch .text
        let sorteliste = document.getElementById("sorteliste");
        let liNode = document.createElement("LI"); //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
        liNode.innerText = sorte.options[sorte.selectedIndex].text; //wie man ne liste befüllt ^
        sorteliste.appendChild(liNode);
        let price = parseFloat(sorte.options[sorte.selectedIndex].getAttribute("preis"));
        preisAktualisieren(price);
    }
    // zeug was an server geschickt wurde anzeigen 
    function sortenImLinkZeigen() {
        //console.log("jaja bin schon da");
        let urlSchreiben = "https://eisapp.herokuapp.com/?";
        console.log("sortenListe");
        for (let i = 0; i < Eis.sortenListe.length; i++) {
            if (Eis.sortenListe[i] != null) {
                let anzahl = 0;
                let sorteliste = document.getElementById("sorteliste");
                for (let k = 0; k < sorteliste.children.length; k++) {
                    if (sorteliste.children[k].innerHTML == Eis.sortenListe[i][0]) {
                        anzahl += 1;
                    }
                }
                urlSchreiben += `${Eis.sortenListe[i][0]}=${anzahl}&`;
            }
        }
        let alles = document.getElementsByTagName("input");
        for (let ding of alles) {
            if (ding.checked == true)
                urlSchreiben += `${ding.name}=${ding.value}&`;
            if (ding.type == "text")
                urlSchreiben += `${ding.name}=${ding.value}&`;
        }
        console.log(urlSchreiben);
        window.open(urlSchreiben);
    }
    function sortenAuswahl(_sorte) {
        let select = document.getElementById("sorte");
        for (let s of _sorte) { //in lässt über inex laufen, gibt also 0,1,2... da müsste man _zusatz[i] schreiben. for.. of gibt direkt die elemente 
            console.log(s);
            // checkbox erstellen
            let auswahl = document.createElement("option");
            // auswahl.type = "checkbox";
            auswahl.value = s[0];
            auswahl.innerText = s[0];
            auswahl.setAttribute("preis", s[1].toString());
            //auswahl.onclick = sorteAnzeigen;  //macht den button überflüssig-> direkte auswahl übers menu
            select.appendChild(auswahl);
        }
    }
    // ZUsätze CHECKBOXEN aus HTML in ts umschreiben: 
    function zusatzChecks(_zusatz) {
        let fieldset = document.getElementById("zusatz");
        for (let z of _zusatz) { //in lässt über inex laufen, gibt also 0,1,2... da müsste man _zusatz[i] schreiben. for.. of gibt direkt die elemente 
            console.log(z);
            // checkbox erstellen
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            //checkBox.value = z[0];
            checkBox.name = z[0];
            checkBox.id = z[0];
            checkBox.onclick = anzeigenZusatz;
            checkBox.setAttribute("preis", z[1].toString());
            let label = document.createElement("label");
            label.setAttribute("for", checkBox.id); //wir machen dasselbe wie bei html, arbeiten die zeile schritt für schritt ab
            label.innerText = z[0]; //<input type="checkbox" value="Streusel" id="streusel"/>
            //<label for="streusel">Streusel</label>
            //-> erst type, value, id, for beim label 
            fieldset.appendChild(checkBox);
            fieldset.appendChild(label);
        }
    }
    // radiobuttons für die Darreichungsform erstellen
    function formRadio(_formen) {
        let fieldset = document.getElementById("form");
        for (let f of _formen) {
            let radioDot = document.createElement("input");
            radioDot.type = "radio";
            radioDot.name = "Form";
            radioDot.value = f;
            radioDot.id = f;
            radioDot.onclick = anzeigenForm; //warum keine klammern??
            let label = document.createElement("label");
            label.setAttribute("for", radioDot.id); //wir machen dasselbe wie bei html, arbeiten die zeile schritt für schritt ab
            label.innerText = f; //<input type="checkbox" value="Streusel" id="streusel"/>
            //<label for="streusel">Streusel</label>
            //-> erst type, value, id, for beim label 
            fieldset.appendChild(radioDot);
            fieldset.appendChild(label);
        }
    }
    function anzeigenZusatz(_event) {
        let check = _event.target; // rausfinden auf welche karte geklickt wurde indem man das event holt
        let checkVal = check.value; //text dieser karte holen
        let price = parseFloat(check.getAttribute("preis"));
        if (check.checked) {
            let zusatzListe = document.getElementById("zusatzliste");
            let liNode = document.createElement("LI"); //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
            liNode.innerText = checkVal; //wie man ne liste befüllt ^
            liNode.id = checkVal;
            zusatzListe.appendChild(liNode); //das gecheckte der liste hinzufügen
            preisAktualisieren(price);
        }
        else {
            let zusatzListe = document.getElementById(checkVal); // beim unchecken...
            zusatzListe.parentNode.removeChild(zusatzListe); //....removen
            preisAktualisieren(-price);
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
        sortenImLinkZeigen();
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
        alert("Alles passt. Wird geliefert!");
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=eis.js.map