const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');


router.get('/', controllers.shop.getAll);

router.post('/', auth(), controllers.shop.post);

router.get('/:id', controllers.shop.getOne);

router.put('/:id', auth(), controllers.shop.put);

router.delete('/:id', auth(), controllers.shop.delete);

module.exports = router;