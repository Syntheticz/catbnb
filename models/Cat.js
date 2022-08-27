const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    img:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: [true, 'Please add a Name!']
    },
    ratings:Number,
    status: Boolean,
    services: String,
    price: Number,
    about: String,
})

module.exports = mongoose.models.Card || mongoose.model('Card', CatSchema);