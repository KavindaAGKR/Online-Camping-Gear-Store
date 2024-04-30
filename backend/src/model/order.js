const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    buyer: 
    {
        type: Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true,
    },
    product:
    {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity:
    {
        type: Number,
        required: true,
    },
    total:
    {
        type: Number,
        
    },
    date:
    {
        type: String,
        required: true,
    },
    orderstatus:
    {
        type: String,
        
    }



});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;