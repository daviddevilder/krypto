import * as chai from 'chai';
import {TokensManager} from '../modules/TokensManager'
import {Token} from "../../common/models/Token";

const expect = chai.expect;

describe('GetTokens', () => {
    it('should be a valid function', () => {
        expect(typeof TokensManager.GetTokens).to.be.equal("function");
    });

    it('should return a list of top 10 tokens from the coinmarketcap API', () => {
        TokensManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens.length).to.be.equal(10);
        });
    });

    it('should return a list of Token objects', () => {
        TokensManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens[0]).to.be.an.instanceof(Token);
        });
    });

    it('should return tokens with id, name nad price properties populated', () => {
        TokensManager.GetTokens().then((tokens: Token[]) => {
            expect(tokens[0].id).to.be.greaterThan(0);
            expect(tokens[0].name.length).to.be.greaterThan(0);
            expect(tokens[0].price).to.be.greaterThan(0);
        });
    });
});