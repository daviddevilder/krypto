import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokenListComponent } from './token-list/token-list.component';
import { TokenService } from "./services/token.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TokenListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
