const createHttpError = require('http-errors');
const OrderModel = require('../model/order');
const mongoose = require('mongoose');
//const { Product } = require('../../../frontend/frontend/src/pages/shop/products');

// Create order
exports.create = async (req, res, next) => {
  const { buyer, product, quantity, date } = req.body;

  try {
    if (!buyer || !product || !quantity || !date) {
      throw createHttpError(400, 'Please provide all the required fields');
    }

    const productDoc = await ProductModel.findById(product);
    //const productDoc = await product.findById(product);

    if (!productDoc) {
      throw createHttpError(400, 'Invalid product ID');
    }

    const total = quantity * productDoc.price;

    const order = new OrderModel({
      buyer: mongoose.Types.ObjectId(buyer),
      product: mongoose.Types.ObjectId(product),
      quantity,
      total,
      date,
      //orderStatus: 'pending', // Add this if you want to set the order status
    });

    const result = await order.save();

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};





//get order
exports.getOrdersByOwner = async (req, res, next) => {

    const companyId = req.params.id;

    try {

        const orders = await OrderModel.find({ owner: ownerId }).populate('buyer').populate('product').exec();
        res.send(orders);


    } catch (error) {
        next(error)
    }

}



//get order by buyer
exports.getOrdersByBuyer = async (req, res, next) => {

    const buyerId = req.params.id;

    try {

        const orders = await OrderModel.find({ buyer: buyerId }).populate('buyer').populate('product').exec();
        res.send(orders);
    }
    catch (error) {
        next(error)
    }
}













/*
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const OrderModel = require('../model/order')
const mongoose = require('mongoose');




// create order
exports.create = async (req, res, next) => {

    const {
        buyer,
        product,
        quantity,
        date
        // description,
        // address
    } = req.body;

    try {
        

        if (!buyer || !product || !quantity || date) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const buyerId = mongoose.Types.ObjectId(buyer);
        const productId = mongoose.Types.ObjectId(product);

        const order = new OrderModel({
            buyer: buyerId,
            product: productId,
            quantity,
            //total: quantity * product.price,
            date //Date.now(),
            // orderStatus: 'pending',
            // file: filepathtoUplaod,
            // description,
            // address
        });

        const result = await order.save();

        res.status(201).send(result);

    } catch (error) {

        next(error)

    }

}



//get order
exports.getOrdersByOwner = async (req, res, next) => {

    const companyId = req.params.id;

    try {

        const orders = await OrderModel.find({ owner: ownerId }).populate('buyer').populate('product').exec();
        res.send(orders);


    } catch (error) {
        next(error)
    }

}



//get order by buyer
exports.getOrdersByBuyer = async (req, res, next) => {

    const buyerId = req.params.id;

    try {

        const orders = await OrderModel.find({ buyer: buyerId }).populate('buyer').populate('product').exec();
        res.send(orders);
    }
    catch (error) {
        next(error)
    }
}

*/