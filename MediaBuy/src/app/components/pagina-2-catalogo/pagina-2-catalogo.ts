import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prodotto } from '../prodotto/prodotto';
import { ProdottiService } from '../../services/prodotti/prodotti';

@Component({
  selector: 'app-pagina-2-catalogo',
  imports: [CommonModule, Prodotto],
  templateUrl: './pagina-2-catalogo.html',
  styleUrl: './pagina-2-catalogo.css',
})
export class Pagina2Catalogo {
  prodotti: any[] =  [];

  constructor(private ProdottiService: ProdottiService) {}

  ngOnInit() {
    this.prodotti = this.ProdottiService.getProdotti();
  }

  mostraProdotti = true;
  event_mostraProdotti () {
    this.mostraProdotti = !this.mostraProdotti; 
  }
}
