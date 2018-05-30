import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../services/portfolio.service";
import {Portfolio} from "../../../common/models/Portfolio";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {Token} from "../../../common/models/Token";
import {TokenService} from "../services/token.service";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

    public portfolioForm: FormGroup;
    public Portfolios: Portfolio[];
    public Tokens: Token[] = [];

    constructor(private portfolioService: PortfolioService,
                private tokenService: TokenService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.portfolioForm = this.formBuilder.group({
            name: '',
            holdings: this.formBuilder.array([this.createHolding()])
        });

        this.tokenService.LoadTokens()
            .subscribe((tokens: Token[]) => {
                this.Tokens = tokens;
                this.portfolioService.LoadPortfolios()
                    .subscribe((portfolios: Portfolio[]) => {
                        this.Portfolios = portfolios;
                        this.Portfolios.forEach((portfolio) => {
                            portfolio.totalValue = 0;
                            portfolio.holdings.forEach(holding => {
                                var token: Token = this.Tokens.filter(function (token) {
                                    return token.id == holding.tokenId;
                                })[0];
                                holding.tokenName = token.name;
                                holding.value = Number(token.price) * Number(holding.quantity);
                                portfolio.totalValue += holding.value;
                            });
                        });
                    });
            });
    }

    createHolding(): FormGroup {
        return this.formBuilder.group({
            tokenId: '',
            quantity: ''
        });
    }

    get holdings(): FormArray {
        return this.portfolioForm.get('holdings') as FormArray;
    };

    addHolding(): void {
        this.holdings.push(this.createHolding());
    }

    createPortfolio(formValue: any) {
        this.portfolioService.CreatePortfolio(formValue)
            .subscribe(() => {
                alert("Created successfully!!!");
            });
    }

}
