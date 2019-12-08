const models = require('../models');
const fs = require('fs')
module.exports = {
    getAll: (req, res, next) => {
        models.Shop.find()
            .then((products) => {
                res.send(products)})
            .catch(next);
    },
    getOne: (req, res, next) => {
        const id = req.params.id
        models.Shop.findById({_id: id})
            .then((product) => {
               
                res.send(product)})
            .catch(next);
    },

    post: ( req, res, next) => {
        const {name, price, description, productImg } = req.body;
        
        const { _id } = req.user;
        models.Shop.create({ name, price, description,productImg, author: _id })
            .then((createdShop) => {
               
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { products: createdShop } }),
                    models.Shop.findOne({ _id: createdShop._id })
                ]);
            })
            .then(([modifiedObj, shopObj]) => {
                res.send(shopObj);

            })
            .catch(next);
                
        
    },

    put: (req, res, next) => {
        const id = req.params.id;
        debugger
        const { description,price,name, productImg, oldImage } = req.body;
        if (oldImage && oldImage !==productImg) {
            const fileToRemove = oldImage.slice(22)
        const filepath = `./public/${fileToRemove}`
        fs.unlink(filepath, err =>{
            if (err) throw err;
            console.log("Successfulyy");
            
        })
        }
        
        models.Shop.updateOne({ _id: id }, { description,price,name,productImg})
            .then((updatedProduct) => res.send(updatedProduct))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Shop.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }
};