var router = require('express').Router();
var menus = require('../controllers/menus')


router.post('/', menus.list)


module.exports = router;