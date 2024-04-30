const express = require('express');

const router = express.Router();
const BuyerController = require('../controllers/buyer');
const verifyToken = require('../middlewears/verifyToken')

router.post('/signup', BuyerController.register)
router.post('/login', BuyerController.login)

router.get('/:id', BuyerController.getOne)
router.get('/email/:email', BuyerController.getByEmail)


module.exports = router;