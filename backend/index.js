require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = require('./src/app');
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

const dbURI = process.env.MONGODB_URI || 'mongodb+srv://kavindaaludeniya:BLNihyjL1zpdBN8R@cluster0.nuwbka2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MongoDB
mongoose.connect(dbURI, {})
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


