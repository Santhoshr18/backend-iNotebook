
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_DB_URI

const connectToDb = () => {
    mongoose.connect(mongoURI,() => {
        console.log('success');
    })
}

module.exports = connectToDb