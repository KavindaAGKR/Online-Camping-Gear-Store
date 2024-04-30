const ProductModel = require('../model/product')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');



//Create product
exports.create = async (req, res, next) => {
    const {
        name,
        description,
        price
    } = req.body;
    try {
        const { image } = req.files;
        if (!image) {
            throw createHttpError(404, "Image not found")
        };
        if (!image.mimetype.startsWith('image')) {
            throw createHttpError(400, 'Only images are allowed');
        }
        let filepath = __dirname + '../../../public/products/' + image.name
        image.mv(filepath);

        let filepathtoUplaod = '/public/products/' + image.name

        if (!name || !description || !price) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const product = new ProductModel({
            name,
            description,
            price,
            image: filepathtoUplaod,
        });

        const result = await product.save();

        res.status(201).send(result);



    } catch (error) {
        next(error)
    }

}


//Update product
exports.update = async (req, res, next) => 
{

    const productId = req.params.id;

    const {
        name,
        description,
        price

    } = req.body;


    try {

        if (!mongoose.isValidObjectId(productId)) {
            throw createHttpError(400, "Invalid Id")
        }


        if (!name || !description || !price) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const { image } = req.files;
        let filepath
        let filepathtoUplaod;

        if (image) {
            if (!image.mimetype.startsWith('image')) {
                throw createHttpError(400, 'Only images are allowed');
            }
            filepath = __dirname + '../../../public/products/' + image.name
            image.mv(filepath);
            filepathtoUplaod = '/public/products/' + image.name
        };

        const product = await ProductModel.findById(productId).exec();

        if (!product) {
            throw createHttpError(404, 'Product not found');
        }

        product.name = name;
        product.description = description;
        product.price = price;
        if (image) {
            product.image = filepathtoUplaod;
        }

        const result = await product.save();

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }
}


//Delete product
exports.delete = async (req, res, next) => {

    const productId = req.params.id;
    

    try {
        if (!mongoose.isValidObjectId(productId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await ProductModel.findByIdAndDelete(productId).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}









exports.getAll = async (req, res, next) => {

    try {
        const result = await ProductModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const Id = req.params.id;

    try {

        if (!mongoose.isValidObjectId(Id)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await ProductModel.findById(Id).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }

}

exports.search = async (req, res, next) => {
    const query = req.query.q;

    try {

        if (!query) {
            throw createHttpError(400, "Please provide a search query")
        }

        const result = await ProductModel.find({ name: { $regex: query, $options: 'i' } }).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}