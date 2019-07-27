"use strict";
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Lukas Scheuerle
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "eia2A9";
let db;
let students;
let highScores;
// running on heroku?
//if (process.env.NODE_ENV == "production") {
databaseURL = "mongodb+srv://ninjanna:power123@cluster0-wbyyo.mongodb.net/test";
databaseName = "eia2A9";
//
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        students = db.collection("students");
        highScores = db.collection("highscores");
    }
}
function findByName(name, _callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = highScores.find({ name: name });
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, scoreArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(scoreArray));
    }
}
exports.findByName = findByName;
function highestScore(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = highScores.find().sort({ highscore: -1 }).limit(5);
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, scoreArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(scoreArray));
    }
}
exports.highestScore = highestScore;
function updateScore(_doc) {
    // try insertion then activate callback "handleInsert"
    //highScores.update({name: _doc.name}, {$set: {highscore: _doc.highscore}});
    highScores.update({ name: _doc.name }, { name: _doc.name, highscore: _doc.highscore }, { upsert: true, w: 1 });
}
exports.updateScore = updateScore;
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = students.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
exports.findAll = findAll;
// try to fetch all documents from database, then activate callback
function findByMatrikel(matrikel, _callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = students.find({ matrikel: matrikel });
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
exports.findByMatrikel = findByMatrikel;
//# sourceMappingURL=Database.js.map