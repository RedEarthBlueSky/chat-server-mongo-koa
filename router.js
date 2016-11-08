'use strict';

const router = require('koa-router')();
const bodyParser = require('body-parser');

const messagesCtrl = require('./controller.js');

router.get('/messages', messagesCtrl.getLatest);

router.post('/messages', messagesCtrl.post);

router.get('/login', messagesCtrl.login);

router.post('/signup', messagesCtrl.signup);

module.exports = router;
