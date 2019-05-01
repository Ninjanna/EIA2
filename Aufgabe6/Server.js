"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // arbeitet mit Node: macht ein neues http Objekt, damit interpreter nach import dazu suchen und hinzufügen kann
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //"Starting server" wird in der konsole ausgegenen (direkt nachdem namespace erstellt wurde)
    let port = Number(process.env.PORT); //neue variable port vom typ number: setzen der Umgebungsvariable PORT damit der Server weiß welcher welchem port er "zuhören" muss
    if (!port) //wenn port den wert false hat:
        port = 8100; //setze ihn auf 8100
    let server = Http.createServer(); //neue Variable server mit dem typ Http.server wird erstellt, und mit einen neuen Server als http befüllt
    server.addListener("request", handleRequest); //auf dem server wird ein Event-Listener erstellt. Dieser führt die Funktion 'handleRequest' aus, wenn der server eine Anfrage bekommt
    server.addListener("listening", handleListen); //zweiter Event-listener: handleListen wird ausgeführt, wen der server "zuhört"
    server.listen(port); //server soll nun port "zuhören"
    function handleListen() {
        console.log("Listening"); //wenn die Funktion handleListen aufgerufen wird (was genau dann passiert wenn der eventlistener "listen" feststellt), wird in der konsole "Listening" ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // sobald die funktion handleRequest aufgerufen wird, gibt sie "I hear voices" auf der konsole aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); //_response erhält werte für den header  
        _response.setHeader("Access-Control-Allow-Origin", "*"); // noch mehr was in den header von _response kommt
        _response.write(_request.url); //die soeben in _response definierten werte werden nun die url von _request geschrieben
        _response.end(); //schließt _response ab und signalisiert dies dem Server 
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map