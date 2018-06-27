import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";
import { stringify } from "querystring";

import { User } from "src/app/entity/user";
import { LoginComponent } from "src/app/login/login.component";
import { Router } from "@angular/router";





@Injectable()
export class LoginService{
    
     

    private login1:LoginComponent;

    accesso=false;

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http,
                private route:Router){}
    
    
    login(user:User): Promise<User>{
       
        console.log("login service raggiunto");
        console.log(user);
        return this.http.post('http://localhost:8010/cliente/login1', user,
        {headers:this.headers}
        )
        .toPromise()
        .then(res=>this.accesso= res.json())
        .catch(this.handleError);
    }



    login2(user){
       
        console.log(user);
        return this.http.post('http://localhost:8010/cliente/login1', user,
        {headers:this.headers})
        
    }
    
    carrello(){
        return this.http.get('http://localhost:8010/cliente/prodotti/carrello/carrelli');
    }
    

    private handleError(error: any): Promise<any> {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

    logout(){
        this.accesso= false;
         this.route.navigate(["/"]);
         sessionStorage.clear();
      }

    salvaCarrello(carrello, user){
        let prova= { carrello, user};
        console.log("arrivato nella service");
        console.log(carrello);
        console.log(user);
        return this.http.post('http://localhost:8010/cliente/prodotti/carrello/creaCarrello',prova, {headers:this.headers})

    }

    sessione(){

        return this.http.get('http://localhost:8010/cliente/prodotti/carrello/sessione')
    }

    getUser(user){
        return this.http.post('http://localhost:8010/cliente/getUser', user, {headers:this.headers})
    }

}