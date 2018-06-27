import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {GrowlModule} from 'primeng/growl';


import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { ProvaService } from 'src/app/prova/prova.service';
import { ProdottiService } from 'src/app/prodotti/prodotti.service';
import { LoginService } from 'src/app/login/login.service';
import { HeaderComponent } from './header/header.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdottiDettaglioComponent } from './prodotti/prodotti-dettaglio/prodotti-dettaglio.component';
import { DropdownDirective } from 'src/app/condivisa/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    HeaderComponent,
    CarrelloComponent,
    ProdottiComponent,
    LoginComponent,
    DropdownDirective,
    ProdottiDettaglioComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    GrowlModule
  ],
  providers: [ProvaService ,ProdottiService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
