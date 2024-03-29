namespace DBClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://studenten.herokuapp.com/"; 

    function init(_event: Event): void {
        console.log("DBClient initialized");
        //let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        //let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        //insertButton.addEventListener("click", insert);
        //refreshButton.addEventListener("click", refresh);
    }
    
    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let matrikelFilter: string = (<HTMLInputElement>document.getElementById("matrikel_find")).value;

        if (matrikelFilter) {
            let query: string = "command=findByMatrikel";
            query += "&matrikel=" + matrikelFilter;
            sendRequest(query, handleFindResponse);
        } else {
            let query: string = "command=refresh";
            sendRequest(query, handleFindResponse);
        }
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("Raw response: ", xhr.response);
            let hsdata: HighScoreData = <HighScoreData>(JSON.parse(xhr.response)[0]);
            //console.log(hsdata);
            let highScoreElement: HTMLElement = document.getElementById("highscore");
            highScoreElement.innerText = String(hsdata.highscore);
        }
    }

    function handleTopScoresResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("Raw response: ", xhr.response);
            let topscores = JSON.parse(xhr.response);
            //console.log(hsdata);
            let topXElement: HTMLElement = document.getElementById("topx");
            let s: string = "";
            for (var p of topscores) {
                s += " | ";
                s += p.name;
                s += ": ";
                s += p.highscore;
            }
            topXElement.innerText = s;
        }
    }


    function handleUpdateResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }


    export function updatePlayerScore(name: string, score: number): void {
        if (name.length > 0) {
            let query: string = "command=updateScore";
            query += "&name=" + name;
            query += "&score=" + String(score);
            sendRequest(query, handleUpdateResponse);
        }
    }

    export function findByName(_name: string): void {
        let query: string = "command=findByName";
        query += "&name=" + _name;
        sendRequest(query, handleFindResponse);
    }

    

    export function topScores(): void {
        let query: string = "command=highestScores";
        sendRequest(query, handleTopScoresResponse);
    }


}