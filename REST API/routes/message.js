const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');


router.get('/', controllers.message.getAll);

router.post('/', auth(), controllers.message.post);

router.get('/:id', controllers.message.getOne);

router.delete('/:id', auth(), controllers.message.delete);

module.exports = router;