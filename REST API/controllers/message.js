const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Message.find()
            .then((messages) => {
               
                res.send(messages)})
            .catch(next);
    },
    getOne: (req, res, next) => {
        const id = req.params.id
        debugger
        models.Message.findById({_id: id})
            .then((message) => {
               
                res.send(message)})
            .catch(next);
    },

    post: ( req, res, next) => {
        const {name, phone, text, productId } = req.body;
        
        const { _id } = req.user;
        models.Shop.create({ name, phone, text, author: _id })
            .then((createdMessage) => {
               
                return Promise.all([
                    models.Shop.updateOne({ _id: productId }, { $push: { messages: createdMessage } }),
                    models.Message.findOne({ _id: createdMessage._id })
                ]);
            })
            .then(([modifiedObj, messageObj]) => {
                res.send(messageObj);

            })
            .catch(next);
                
        
    },


    delete: (req, res, next) => {
        const id = req.params.id;
        models.Message.deleteOne({ _id: id })
            .then((removedMessage) => res.send(removedMessage))
            .catch(next)
    }
};