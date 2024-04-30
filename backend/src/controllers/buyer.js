const BuyerModel = require('../model/buyer')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');



//To register
exports.register = async (req, res, next) =>
{
        const name = req.body.name
        const password = req.body.password
        const email = req.body.email
        const phone = req.body.phone
        const address = req.body.address
        console.log(req.body)
        try{
            if(!email || !password || !name || !phone || !address){
                throw createHttpError(400, 'Missing a data')
            }
            const isUserAvailaible = await BuyerModel.findOne({email: email}).exec();
            if(isUserAvailaible){
                throw createHttpError(400,'User is already exists')
            }
    
            const hashedPw = await bcrypt.hash(password,15);
    
            const buyer = new BuyerModel({
                name:name,
                email:email,
                password : hashedPw,
                phone:phone,
                address: address 

            }) 
    
            const result = await buyer.save();
            res.status(201).send(result);
    
    
        }
        catch(error){
            next(error)
    
        }
}

    




//login
exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Email or passwaord is missing')
        }

        const buyer = await BuyerModel.findOne({ email: email }).exec();

        if (!buyer) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, buyer.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await BuyerModel.findOne({ email: email }).exec();
 
        const token = jwt.sign(
            {
                user_id: user._id,
                email: user.email,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "3h",
            }
        )

        user.token = token;

        const result = await user.save();

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}



//get a buyer
exports.getOne = async (req, res, next) => {
    const Id = req.params.id;

    try {

        if (!mongoose.isValidObjectId(Id)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await BuyerModel.findById(Id).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }

}

exports.getByEmail = async (req, res, next) => {
    const email = req.params.email;

    try {
        
        // if (!isValidEmail(email)) {
        //     throw createHttpError(400, "Invalid Email");
        // }

        const result = await BuyerModel.findOne({ email }).exec();

        if (!result) {
            throw createHttpError(404, 'Buyer not found for the given email');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};