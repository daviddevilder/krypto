import {TestBed, inject} from '@angular/core/testing';
import {TokenService} from './token.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('TokenService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TokenService, HttpClient, HttpHandler]
        });
    });

    it('should be created', inject([TokenService], (service: TokenService) => {
        expect(service).toBeTruthy();
    }));
});
