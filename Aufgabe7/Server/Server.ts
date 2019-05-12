import * as Http from "http";  // arbeitet mit Node: macht ein neues http Objekt, damit interpreter nach import dazu suchen und hinzufügen kann
import * as Url from "url";
namespace L05_Server {        // öffnet namespace für L05_Server
	console.log("Starting server");  //"Starting server" wird in der konsole ausgegenen (direkt nachdem namespace erstellt wurde)
	let port: number = Number(process.env.PORT);  //neue variable port vom typ number: setzen der Umgebungsvariable PORT damit der Server weiß welcher welchem port er "zuhören" muss
	if (!port) 			//wenn port den wert false hat:
		port = 8100;	//setze ihn auf 8100

	let server: Http.Server = Http.createServer();  //neue Variable server mit dem typ Http.server wird erstellt, und mit einen neuen Server als http befüllt
	server.addListener("request", handleRequest);   //auf dem server wird ein Event-Listener erstellt. Dieser führt die Funktion 'handleRequest' aus, wenn der server eine Anfrage bekommt
	server.addListener("listening", handleListen); //zweiter Event-listener: handleListen wird ausgeführt, wen der server "zuhört"
	server.listen(port); 		//server soll nun port "zuhören"

	function handleListen(): void {		//deklarienen der neue funktion handleListen, keine parameter,  void -> keine rückgabewert
		console.log("Listening");  	//wenn die Funktion handleListen aufgerufen wird (was genau dann passiert wenn der eventlistener "listen" feststellt), wird in der konsole "Listening" ausgegeben
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //neue funktion handleRequest: bei aufruf werden zwei parameter erwartet: _request vo typ Http.IncomingMessage (für eingehende anfragen) und _response vom typ Http.ServerResponse (für die antwort)
		console.log("I hear voices!");      // sobald die funktion handleRequest aufgerufen wird, gibt sie "I hear voices" auf der konsole aus

		_response.setHeader("content-type", "text/html; charset=utf-8"); //_response erhält werte für den header  
		_response.setHeader("Access-Control-Allow-Origin", "*");  // noch mehr was in den header von _response kommt

		_response.write(_request.url);  //die soeben in _response definierten werte werden nun die url von _request geschrieben
		
	let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let param in url.query)
			_response.write("<p>" + param + url.query[param] + "</p>");
		
		console.log(_request.url); 

		_response.end();  //schließt _response ab und signalisiert dies dem Server 
	}
} 