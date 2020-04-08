import { ServicoEstado } from './servicos/servico.estado';
import { VetoresComponent } from './vetores/vetores.component';
import { SomaComponent } from './soma/soma.component';
import { Erro404Component } from './erro404/erro404.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, SobreComponent, Erro404Component, SomaComponent, RodapeComponent, VetoresComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
