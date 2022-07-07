const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const fs = require('fs');
const mongodb = require('mongodb');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/symphoniepicture', (req, res) => {
    fs.readFile("./assets/img/symphonie.png", (err, data) => {
        res.status(200).send(data);
    });
})

app.get('/visitor', (req, res) => {
    mongodb.MongoClient.connect('mongodb://162.19.6.69:25553', {useNewUrlParser: true}, (err, client) => {
        if (err) {
            console.log('Unable to connect to MongoDB server');
            return false;
        }
        const db = client.db('portfolio');
        db.collection('portfolio').findOne( (err, result) => {
                if (err) {
                    console.log('Unable to fetch visitor');
                    return false;
                }

                if (!result) {
                    db.collection('portfolio').insertOne({visitor: 1}).then(r => ()=>{
                        console.log("insert")
                    });

                    console.log(result);
                    res.json({1: 1});
                   return true;
                }else {
                    let resultat = result.visitor;
                    db.collection("portfolio").updateOne({}, {$inc: {visitor: 1}}).then(r => ()=>{
                        console.log(r)
                    })
                    console.log("connexion")
                    console.log(req.url)
                    res.json({1: result.visitor});
                    return true;
                }


            }
        );
    })
});


const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};
const https = require("https");
https.createServer(options, app)
    .listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})