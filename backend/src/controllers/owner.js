const OwnerModel = require('../model/owner')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');




//login
exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Email or passwaord is missing')
        }

        const owner = await OwnerModel.findOne({ email: email }).exec();

        if (!owner) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, owner.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await OwnerModel.findOne({ email: email }).exec();
 
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





//To register
exports.register = async (req, res, next) =>
{
        const name = req.body.name
        const password = req.body.password
        const email = req.body.email
        const phone = req.body.phone
        
        try{
            if(!email || !password || !name || !phone){
                throw createHttpError(400, 'Missing a data')
            }
            const isUserAvailaible = await OwnerModel.findOne({email: email}).exec();
            if(isUserAvailaible){
                throw createHttpError(400,'User is already exists')
            }
    
            const hashedPw = await bcrypt.hash(password,15);
    
            const owner = new OwnerModel({
                name:name,
                email:email,
                password : hashedPw,
                phone:phone
            }) 
    
            const result = await owner.save();
            res.status(201).send(result);
    
    
        }
        catch(error){
            next(error)
    
        }
}

    
