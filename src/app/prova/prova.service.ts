import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";


@Injectable()
export class ProvaService{

    constructor(private http:Http){};

    getProdotti(){
        
        return this.http.get('http://localhost:8010/cliente/prodotti/lista')
    }

}