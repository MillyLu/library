const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    header: {
        type: String,
        required: true,
        minLength: 2
    },
    author:{
        type: String,
        required: true,
        minLength: 2
    },
    year: {
        type: Number,
        required: true,
        minLength: 2
    },

});

module.exports = mongoose.model('book', bookSchema);