import {Request, Response} from 'express';
import {TokensManager} from '../modules/TokensManager'

const router = require('express').Router();
module.exports = router;

router.get('/list', async (request: Request, response: Response) => {
    const result = await TokensManager.GetTokens();
    response.send(result);
});