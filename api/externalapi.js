const config = require('./config.json');
const quotes = require('./quotes.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/delete/:user', (req, res, next) => {
    if (res.headers['x-api-key'] !== config.password) {
        res.status(403);
        return
    }

    if (!res.params.user) {
        res.status(400);
        return
    }

    quotes.deleteQuote(req.params.user);
    res.send("Delete user " + req.parms.user);

});

app.post('/insert', (req, res, next) => {
    if (res.headers['x-api-key'] !== config.password) {
        res.status(403);
        return
    }

    quote.newQuote(req.body.id, req.body.quote);

    res.send("Added quote for " + req.body.id);
});

app.listen(8444, () => { console.log("Running on post 8444")})
