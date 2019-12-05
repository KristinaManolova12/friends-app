const controllers = require('../controllers/');
const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/shop', controllers.shop.get);

// router.post('/', auth(), controllers.shop.post);

// router.put('/:id', auth(), controllers.shop.put);

// router.delete('/:id', auth(), controllers.shop.delete);

module.exports = router;