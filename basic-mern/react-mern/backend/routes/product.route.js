let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let productSchema = require('../models/product')

// Create
router.route('/create-product').post((req,res,next)=> {
    productSchema.create(req.body, (err, data)=> {
        if (err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    })
})

// Read
router.route('/').get((req, res, next)=> {
    productSchema.find((err,data)=> {
        if (err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    })
})

// Read One
router.route('/edit-product/:id').get((req,res, next)=> {
    productSchema.findById(req.params.id, (err,data)=> {
        if (err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    })
})

// Update
router.route('/update-product').put((req, res, next)=> {
    productSchema.findByIdAndUpdate(req.param.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    })
})

router.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        }
        else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router