import {Request, Response} from 'express';

const router = require('express').Router();
module.exports = router;

router.get('/list', async (request: Request, response: Response) => {
    // await getting them from https://coinmarketcap.com/api
    // parse and respond
    response.send("TODO: Get list of token prices from coinmarketcap API");
});