"use strict";
/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Lukas Scheuerle
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
console.log("Server starting");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    _response.setHeader("Access-Control-Allow-Origin", "*"); // noch mehr was in den header von _response kommt
    console.log("Request received");
    let query = Url.parse(_request.url, true).query;
    let command = query["command"];
    switch (command) {
        case "insert":
            let student = {
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"])
            };
            console.log(JSON.stringify(student));
            Database.insert(student);
            respond(_response, "storing data");
            break;
        case "findByMatrikel": //der case mach nen neuen befehl möglich: suchen
            Database.findByMatrikel(parseInt(query["matrikel"]), findCallback);
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        console.log(json);
        respond(_response, json);
    }
}
function respond(_response, _text) {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}
//# sourceMappingURL=Server.js.map