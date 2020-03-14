import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeiroModule } from './primeiro/primeiro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeiroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
