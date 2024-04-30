const express = require('express');

const router = express.Router();
const OwnerController = require('../controllers/owner');


router.post('/register', OwnerController.register)
router.post('/login', OwnerController.login)

module.exports = router;