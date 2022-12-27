const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
    },
    tag:{
        type: String,
        default:"general"
    },
    date: {
        type: date,
        default: Date.now
    }

})

module.exports = mongoose.model('notes',NotesSchema);