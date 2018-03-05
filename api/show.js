const User = require('./quotes.js').User;

User.findAll().then(r => {
    console.log(r);
});
