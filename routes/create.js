var express = require('express');
var router = express.Router();
var tweetsCtrl = require('../controllers/tweets');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', tweetsCtrl.index);
router.get('/new', ensureLoggedIn, tweetsCtrl.new);
router.get('/:id', tweetsCtrl.show);
router.post('/', ensureLoggedIn, tweetsCtrl.create);

module.exports = router;
