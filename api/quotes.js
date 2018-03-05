const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'ssl',
    null,
    null,
    {
        dialect: 'sqlite',
        storage: './database.sqlite'
    }
)

const User = exports.User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true },
    quote: { type: Sequelize.STRING(2555) }
})

//User.sync();

async function getQuote(user_id) {
    let user = await User.findOne({ where: { id: user_id }});
    if (user) {
        return user.quote
    } else {
        return null
    }
}

function newQuote(user_id, quote) {
    User.create({
        id: user_id,
        quote: quote
    }).then(r => {
        console.log(r)
    })
}

function deleteQuote(user_id) {
    User.destroy({ where: { id: user_id }})
}


exports.newQuote = newQuote;
exports.deleteQuote = deleteQuote;
exports.get = getQuote;


