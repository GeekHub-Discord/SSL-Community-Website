const quotes = require('./quotes.js');

let id = process.argv[2]

quotes.deleteQuote(parseInt(id))
