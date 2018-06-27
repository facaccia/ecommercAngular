import { Component, OnInit,ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { NgForm } from '@angular/forms';
import { Carrello } from 'src/app/entity/carrello';
import { User } from 'src/app/entity/user';
import { Message } from 'primeng/components/common/message';




@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {


  @ViewChild('form') form: NgForm;

  user= new User;

  carrelli;
  carrello= new Carrello;

  nuovoCarrello1= false;

  msgs: Message[]= [];

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  getCarrello(){
    
    let carrelloSalvato= false;
    
    this.loginService.carrello().subscribe(
      (response)=>{ 
        carrelloSalvato= response.json();
      console.log(carrelloSalvato)},
      (error)=>{console.log("---error.---"+error)}
    );
  }

  nuovoCarrello(){
    this.nuovoCarrello1 = true;
  }

  salvaCarrello(){
    let carrelloSalvato= false;
    
    console.log("sono in salva carrello")
    let username= sessionStorage.getItem("username");
    let password= sessionStorage.getItem("password");
    this.user.nome= username;
    this.user.password=password;
    let nomeCarrello:string= this.form.value.nomeCarrello;
    this.carrello.nomeCarrello= nomeCarrello;
    this.loginService.salvaCarrello(this.carrello, this.user).subscribe(
      (response)=>{ carrelloSalvato= response.json();
        console.log(carrelloSalvato)
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});},
      (error)=>{console.log("---error.---"+error)}
    );
    this.form.reset();
  }

  sessione(){
    this.loginService.sessione().subscribe(
      (response)=>{console.log(response.json)}
    );
  }

  pulisci(){
    this.form.reset();
  }

}
