import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/app/prodotti/prodotti.service';
import { Input } from '@angular/core/src/metadata/directives';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  
  
  constructor(private prodottiService: ProdottiService
  ){}
  
  prodotti;
  ngOnInit(){
    this.onProva();
  }
  @ViewChild('id') id: number;

  onProva(){
    this.prodottiService.getProdotti().subscribe(
      (response)=>{
          this.prodottiService.prodotti=response.json();
          this.prodotti= this.prodottiService.prodotti;},
      (error)=>{console.log("---error.---"+error)}
    );
    
    console.log('domani proviamo tutto !!!');
  } 
  sessione(){
    this.prodottiService.sessione().subscribe(
      (response)=>{console.log(response.json)}
    );
  }

  foto(){
   console.log(this.id);
  }

}