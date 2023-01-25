var express = require('express');
var router = express.Router();
var tweetsCtrl = require('../controllers/movies');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', tweetsCtrl.index);
router.get('/new', ensureLoggedIn, tweetsCtrl.new);
router.get('/:id', tweetsCtrl.show);
router.post('/', ensureLoggedIn, moviesCtrl.create);

module.exports = router;
