const quotes = require('./quotes.js');

let id = process.argv[2].toString()
quotes.deleteQuote(id)
