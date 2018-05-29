import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TokenListComponent} from "./token-list/token-list.component";
import {TokenService} from "./services/token.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [TokenService, HttpClient, HttpHandler],
            declarations: [AppComponent, TokenListComponent]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have the correct page title`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Krypto Dashboard');
    }));
});