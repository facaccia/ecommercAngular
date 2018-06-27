import { Component, OnInit,Input } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { Output } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
 



  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  logout(){
    
    console.log(this.loginService.accesso);
    this.loginService.logout();

  }
}
