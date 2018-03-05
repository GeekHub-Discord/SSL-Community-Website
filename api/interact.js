const quotes = require('./quotes.js');

let id = process.argv[2]
let quote = process.argv.slice(3).join(' ')

quotes.newQuote(id, quote)
