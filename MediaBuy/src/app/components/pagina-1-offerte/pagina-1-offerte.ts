import { Component } from '@angular/core';
import { OffertePromozioniService } from '../../services/offerte_promozioni/offerte-promozioni';
import { CommonModule } from '@angular/common';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-pagina-1-offerte',
  standalone: true,
  imports: [CommonModule, Prodotto],
  templateUrl: './pagina-1-offerte.html',
  styleUrl: './pagina-1-offerte.css',
})
export class Pagina1Offerte {
  offerte: any[] =  [];

  constructor(private offertePromozioniService: OffertePromozioniService) {}

  ngOnInit() {
    this.offerte = this.offertePromozioniService.getOfferte();
  }
}
