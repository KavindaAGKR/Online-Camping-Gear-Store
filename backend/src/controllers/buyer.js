const BuyerModel = require('../model/buyer');
const createHttpError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Register
exports.register = async (req, res, next) => {
  const { name, email, password, phone, address } = req.body;

  try {
    if (!name || !email || !password || !phone || !address) {
      throw createHttpError(400, 'Missing required fields');
    }

    const isUserAvailable = await BuyerModel.findOne({ email }).exec();
    if (isUserAvailable) {
      throw createHttpError(400, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const buyer = new BuyerModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    const result = await buyer.save();
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw createHttpError(400, 'Email or password is missing');
    }

    const buyer = await BuyerModel.findOne({ email }).exec();

    if (!buyer) {
      throw createHttpError(400, 'User does not exist');
    }

    const isPasswordValid = await bcrypt.compare(password, buyer.password);

    if (!isPasswordValid) {
      throw createHttpError(400, 'Invalid credentials');
    }

    const token = jwt.sign(
      {
        user_id: buyer._id,
        email: buyer.email,
      },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "3h",
      }
    );

    buyer.token = token;
    const result = await buyer.save();

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Get a buyer by ID
exports.getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "Invalid ID");
    }

    const result = await BuyerModel.findById(id).exec();

    if (!result) {
      throw createHttpError(404, 'Buyer not found');
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Get a buyer by email
exports.getByEmail = async (req, res, next) => {
  const { email } = req.params;

  try {
    const result = await BuyerModel.findOne({ email }).exec();

    if (!result) {
      throw createHttpError(404, 'Buyer not found for the given email');
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
