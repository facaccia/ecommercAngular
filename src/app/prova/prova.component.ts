import { Component, OnInit } from '@angular/core';
import { ProvaService } from 'src/app/prova/prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  prodotti : any =[];
  constructor(private provaService:ProvaService ) { }

  ngOnInit() {
  }
  
  onProva(){
    this.provaService.getProdotti().subscribe(
      (response)=>{ 
        this.prodotti= response.json();
      console.log(this.prodotti)},
      (error)=>{console.log("---error.---"+error)}
    );
    
    console.log('domani proviamo tutto !!!');
  } 

}
