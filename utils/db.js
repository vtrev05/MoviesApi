const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/Cinema';
const connect = async () => {
    try {
        await mongoose.connect(urlDb, {useUnifiedTopology: true, useNewUrlParser: true})
    } catch (error) {
        console.error('todo mal', error)
    }
}

module.exports = {connect}