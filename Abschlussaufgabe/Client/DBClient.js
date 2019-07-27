var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://studenten.herokuapp.com/";
    function init(_event) {
        console.log("DBClient initialized");
        //let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        //let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        //insertButton.addEventListener("click", insert);
        //refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let matrikelFilter = document.getElementById("matrikel_find").value;
        if (matrikelFilter) {
            let query = "command=findByMatrikel";
            query += "&matrikel=" + matrikelFilter;
            sendRequest(query, handleFindResponse);
        }
        else {
            let query = "command=refresh";
            sendRequest(query, handleFindResponse);
        }
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("Raw response: ", xhr.response);
            let hsdata = (JSON.parse(xhr.response)[0]);
            //console.log(hsdata);
            let highScoreElement = document.getElementById("highscore");
            highScoreElement.innerText = String(hsdata.highscore);
        }
    }
    function handleUpdateResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
    function updatePlayerScore(name, score) {
        if (name.length > 0) {
            let query = "command=updateScore";
            query += "&name=" + name;
            query += "&score=" + String(score);
            sendRequest(query, handleUpdateResponse);
        }
    }
    DBClient.updatePlayerScore = updatePlayerScore;
    function findByName(_name) {
        let query = "command=findByName";
        query += "&name=" + _name;
        sendRequest(query, handleFindResponse);
    }
    DBClient.findByName = findByName;
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map