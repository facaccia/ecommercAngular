import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/login/login.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entity/user';
import { HeaderComponent } from 'src/app/header/header.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges {

  @ViewChild('form')form: NgForm;
  user= new User;
  accesso:boolean= this.accessoService();
  private headerComponent:HeaderComponent;
  constructor(private loginService:LoginService, private route: Router) { }
  
  ngOnInit() {
    console.log(this.accesso);
  }
  
  
  login(){
   let username:string= this.form.value.username;
   let password : string= this.form.value.password;
   this.user.nome= username;
   this.user.password= password;

   

    
    // this.loginService.login(this.user);
    
    this.loginService.login2(this.user).subscribe(
      (response)=>{ 
              this.loginService.accesso= response.json();
              this.decidi(username, password)},
      (error)=>{console.log("---error.---"+error)}
      );
    };
  

    decidi(username, password){
      if(this.loginService.accesso===true){
      this.route.navigate(["/prodotti"]);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
      }else{
      document.getElementById("errore").innerHTML="Password o Username sbagliati" 
    }}


    ngOnChanges(){
      console.log("cambia qualcosa")
    }


    logout(){
      
      console.log(this.accesso);
    }

    prodotti(){
      this.route.navigate(["/prodotti"]);
    }

     accessoService(){
      return this.loginService.accesso;
    }
    getUser(){
      let username:string= this.form.value.username;
      let password : string= this.form.value.password;
      this.user.nome= username;
      this.user.password= password;

      console.log(this.user); 
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);

   
      return this.loginService.getUser(this.user).subscribe(
        (response)=>{console.log(response)}
      );
    }

}
