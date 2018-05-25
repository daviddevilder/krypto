import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('tokenList route', () => {
    it('should respond with HTTP 200 status and dummy message', () => {
        return chai.request("http://localhost:3000")
            .get('/api/tokens/list')
            .then(res => {
                expect(res.status).to.be.equal(200);
                expect(res.text).to.be.equal("TODO: Get list of token prices from coinmarketcap API");
            });
    });
});