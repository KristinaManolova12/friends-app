const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Shop.find()
            .then((shops) => res.send(shops))
            .catch(next);
    },
    
};