import * as Tokens from './Tokens';

const router = require('express').Router();
module.exports = router;

router.use('/tokens', Tokens);
