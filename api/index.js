const express = require('express');
const bodyParser = require('body-parser');
const api = require('./dapi.js');

const app = new express();
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get', async (req, res, next) => {
    let staff = await api();
    res.json(staff)
})

app.listen('8555');
