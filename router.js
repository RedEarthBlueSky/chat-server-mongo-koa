'use strict';

const router = require('koa-router')();
const bodyParser = require('body-parser');

const messagesCtrl = require('./controller.js');

router.get('/messages', messagesCtrl.getLatest);

router.post('/messages', messagesCtrl.post);

router.get('/login', messagesCtrl.logIn);

router.post('/sign-up', messagesCtrl.signUp);

module.exports = router;
