import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";


@Injectable()
export class ProdottiService{


    prodotti: any= [];

    constructor(private http:Http){};

    getProdotti(){
        
        return this.http.get('http://localhost:8010/cliente/prodotti/lista')
    }
    getAllProdotti(){

        console.log("sono nella service, prodotti: "+this.prodotti)
        return this.prodotti;
    }

    getProdotto(id){
        return this.prodotti[id];
    }

    sessione(){
        
                return this.http.get('http://localhost:8010/cliente/prodotti/sessione')
            }

}