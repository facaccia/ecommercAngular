import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ProvaComponent } from "src/app/prova/prova.component";
import { CarrelloComponent } from "src/app/carrello/carrello.component";
import {LoginComponent} from "src/app/login/login.component";
import {ProdottiComponent} from "src/app/prodotti/prodotti.component";
import { ProdottiDettaglioComponent } from "src/app/prodotti/prodotti-dettaglio/prodotti-dettaglio.component";


const appRoutes : Routes= [
    {path:'', redirectTo:'/', pathMatch:'full'},
    {path:'', component: LoginComponent},
    {path:'prodotti', component: ProdottiComponent, children:[
        {
            path:':id', component:ProdottiDettaglioComponent
        }
    
        
    ] },
    {path:'carrello', component:CarrelloComponent },
]

@NgModule({

    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}