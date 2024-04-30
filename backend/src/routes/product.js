const express = require('express');
const ProductController = require('../controllers/product')
const mongoose = require('mongoose');

const router = express.Router()


const verifyToken = require('../middlewears/verifyToken')



router.post('/', ProductController.create);
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)



router.get('/all',  ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.get('/searchResults', ProductController.search)


module.exports = router;


