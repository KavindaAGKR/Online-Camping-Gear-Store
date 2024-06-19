const express = require('express');
const ProductController = require('../controllers/product')
const mongoose = require('mongoose');

const router = express.Router()


const verifyToken = require('../middlewears/verifyToken')



router.post('/',verifyToken, ProductController.create);
router.put('/:id',verifyToken, ProductController.update)
router.delete('/:id',verifyToken, ProductController.delete)



router.get('/all',  ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.get('/searchResults', ProductController.search)


module.exports = router;


