/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Lukas Scheuerle
 */

import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    _response.setHeader("Access-Control-Allow-Origin", "*");  // noch mehr was in den header von _response kommt

    console.log("Request received");
    let query: AssocStringString = <AssocStringString> Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {

        case "findByName":
            Database.findByName(query["name"], findCallback);
            break;

        case "updateScore":
            let score: HighScoreData = {
                name: query["name"],
                highscore: parseInt(query["score"])
            };
            console.log(JSON.stringify(score));
            Database.updateScore(score);
            respond(_response, "storing data");
            break;

        case "highestScores":
            Database.highestScore(findCallback);
            break;

        default:
            respond(_response, JSON.stringify({status: "unknown command", "cmd": command}));
            break;
    }

    // findCallback is an inner function so that _response is in scope
    function findCallback(json: string): void {
        console.log(json);
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}