require('dotenv').config()



const express = require('express');
const app = express();
const createHttpError = require('http-errors');
const cors = require('cors')

app.use(cors())

const BuyerRouter = require('./routes/buyer')
const OwnerRouter = require('./routes/owner')
const ProductRouter = require('./routes/product')
const OrderRouter = require('./routes/order')





const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use('/uploads/products', express.static('public/products'))



app.use(express.json())



app.use('/api/v1/buyer', BuyerRouter);
app.use('/api/v1/owner', OwnerRouter);
app.use('/api/v1/product', ProductRouter);
app.use('/api/v1/orders', OrderRouter)






app.use((err,req,res,next)=>{
    if(createHttpError.isHttpError(err)){
        res.status(err.status).send({message: err.message})
    }
    else{
        res.status(500).send({message: err.message})
    }
    //if error unknown
    res.status(500).send({message: "Unkonown error"})
})








module.exports = app;











