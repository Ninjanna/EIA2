/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Lukas Scheuerle
 */

import * as Mongo from "mongodb";

console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "eia2A9";
let db: Mongo.Db;
let students: Mongo.Collection;
let highScores: Mongo.Collection;

// running on heroku?
//if (process.env.NODE_ENV == "production") {
databaseURL = "mongodb+srv://ninjanna:power123@cluster0-wbyyo.mongodb.net/test";
databaseName = "eia2A9";
//

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        students = db.collection("students");
        highScores = db.collection("highscores");
    }
}

export function findByName(name: string, _callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = highScores.find({name: name});
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, scoreArray: HighScoreData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(scoreArray));
    }
}

export function insertScore(_doc: HighScoreData): void {
    // try insertion then activate callback "handleInsert"
    highScores.insertOne(_doc, handleInsert);
}

export function insert(_doc: StudentData): void {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = students.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}

// try to fetch all documents from database, then activate callback
export function findByMatrikel(matrikel: number, _callback: Function): void {  //find fnkt kopiert und mit matrikel als wert rein
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = students.find({matrikel: matrikel});
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}