import { Component } from '@angular/core';
import { ProvaService } from 'src/app/prova/prova.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private provaService:ProvaService,
    private router: Router){}
   
}
