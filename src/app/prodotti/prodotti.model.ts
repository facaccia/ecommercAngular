export class Prodotti{
    public nomeProdotti: string;
    public descrizione: string;
    public prezzo: number;

    constructor(nome:string, descrizione:string, prezzo: number){
        this.nomeProdotti= nome;
        this.descrizione= descrizione;
        this.prezzo=prezzo;
    }
}