import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ProdottiService } from 'src/app/prodotti/prodotti.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-prodotti-dettaglio',
  templateUrl: './prodotti-dettaglio.component.html',
  styleUrls: ['./prodotti-dettaglio.component.css']
})
export class ProdottiDettaglioComponent implements OnInit, OnChanges, DoCheck {

  @Input()index;

  @Input()prodotto;


  constructor(private prodottiService:ProdottiService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=+params['id'];
        this.prodotto=this.prodottiService.getProdotto(this.index);});
    console.log(this.prodotto);
  }


  ngDoCheck(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=+params['id'];
        this.prodotto=this.prodottiService.getProdotto(this.index);});
    console.log("ngDOCHECK"+this.prodotto.descrizione);

  }

  ngOnChanges(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=+params['id'];
        this.prodotto=this.prodottiService.getProdotto(this.index);});
    console.log(this.prodotto);
  }


}
