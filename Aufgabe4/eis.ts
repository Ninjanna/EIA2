namespace Eis  {

window.addEventListener("load", init);

let gesammtPreis: number = 0; 

function init (){
    console.log("I'm working! :D ")
    document.getElementById("sorteButton").addEventListener("click", sorteAnzeigen);

    document.getElementById("streusel").addEventListener("click", anzeigenZusatz);
    document.getElementById("sahne").addEventListener("click", anzeigenZusatz);
    document.getElementById("karamel").addEventListener("click", anzeigenZusatz);

    document.getElementById("becher").addEventListener("click", anzeigenForm);
    document.getElementById("waffel").addEventListener("click", anzeigenForm);
    document.getElementById("schokowaffel").addEventListener("click", anzeigenForm);
}


function preisAktualisieren(_beitrag : number) : void {
    gesammtPreis += _beitrag;
    let preisElement: HTMLDivElement = <HTMLDivElement>document.getElementById("price")
    preisElement.innerText = gesammtPreis.toString();
}


function sorteAnzeigen() : void {
    console.log("huhu")
    let sorte: HTMLSelectElement = <HTMLSelectElement>document.getElementById("sorte"); // hier wird ein type cast gemacht: getElementById gibt ein HTMLELEMENT, aber weir wissen es hat select, deswegen <cast magic>
                                 //w3schools:HTMLSelectElement/<select>: hat attribute. value gibt value (also schoki nich schokolade)
    console.log(sorte.value)
    console.log(sorte.options[sorte.selectedIndex].text)  //das gibt den namen nach value weil: .options liefernt ein array mit allen optionen. davon nehmen wir (mim index []) die wo grad ausgewählt ist (selectedIndex)
                                                         //das gäbe aber <option value="Schoki">Schokolade</option>, deswegen am ende noch .text
    let sorteliste: HTMLUListElement = <HTMLUListElement>document.getElementById("sorteliste")
    let liNode: HTMLLIElement = <HTMLLIElement>document.createElement("LI");         //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
    liNode.innerText = sorte.options[sorte.selectedIndex].text;                       //wie man ne liste befüllt ^
    sorteliste.appendChild(liNode);
    
    preisAktualisieren(1.0);
}


function anzeigenZusatz(_event: Event ) : void {
    let check:HTMLInputElement = <HTMLInputElement>_event.target;   // rausfinden auf welche karte geklickt wurde indem man das event holt
    let checkVal:string = check.value; //text dieser karte holen

    if(check.checked)
    {
        let zusatzListe: HTMLUListElement = <HTMLUListElement>document.getElementById("zusatzliste")
        let liNode: HTMLLIElement = <HTMLLIElement>document.createElement("LI");         //<li> node https://www.w3schools.com/jsref/met_node_appendchild.asp
        liNode.innerText = checkVal                       //wie man ne liste befüllt ^
        liNode.id = checkVal
        zusatzListe.appendChild(liNode)                 //das gecheckte der liste hinzufügen
        preisAktualisieren(0.50);
    }
    else
    {
        let zusatzListe: HTMLElement = document.getElementById(checkVal)    // beim unchecken...
        zusatzListe.parentNode.removeChild(zusatzListe)                 //....removen
        preisAktualisieren(-0.50);
    }
}

function anzeigenForm(_event: Event ) : void {
    let check:HTMLInputElement = <HTMLInputElement>_event.target;   // rausfinden auf welche karte geklickt wurde indem man das event holt

    if(check.checked)
    {
        let checkVal:string = check.value; //text dieser karte holen
        let formWahl: HTMLDivElement = <HTMLDivElement>document.getElementById("formwahl")
        formWahl.innerText = check.value
    }
}


}