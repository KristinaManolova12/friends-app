const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        const id = req.params.productAuthorId
        models.Message.find().populate('products')
            .then((messages) => {
                res.send(messages)})
            .catch(next);
    },
    getOne: (req, res, next) => {
        const id = req.params.id
        models.Message.findById({_id: id})
            .then((message) => {
               
                res.send(message)})
            .catch(next);
    },

    post: ( req, res, next) => {
        const {name, phone, message, productId,productAuthorId } = req.body;
        
        const { _id } = req.user;
        models.Message.create({ name, phone, message, author: _id, productId,productAuthorId,isRead:undefined, date: undefined })
            .then((createdMessage) => {
               
                return Promise.all([
                    models.Shop.updateOne({ _id: productId }, { $push: { messages: createdMessage } }),
                    models.Message.updateOne({ _id: createdMessage._id }, { $push: { products: productId } }),
                    models.Message.findOne({ _id: createdMessage._id })
                ]);
            })
            .then(([modifiedObj, messageObj]) => {
                res.send(messageObj);

            })
            .catch(next);
                
        
    },

    put:(req, res, next) => {
        const id = req.params.id;
        const { isRead } = req.body;
        
        models.Message.updateOne({ _id: id }, { isRead})
            .then((updatedProduct) => res.send(updatedProduct))
            .catch(next)
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        models.Message.deleteOne({ _id: id })
            .then((removedMessage) => res.send(removedMessage))
            .catch(next)
    }
};