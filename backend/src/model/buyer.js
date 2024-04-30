

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
     token:
     {
        type: String,
        required: false,
     }


});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
