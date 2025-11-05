import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffertePromozioniService {
  offerte = [
    {
      data: "24 - 10 - 2025",
      titolo: "Offerte Pre-Black Friday",
      content: "sgdofigasdifgsioutgirghpifduhfogiughspoiduhgdpoiufghsiuhdfgoisdufhgoiduhfg"
    },
    {
      data: "27 - 10 - 2025",
      titolo: "Offerte Pre-Black Friday Plus",
      content: "sgdofigdfgdfighdifghisufhgwperuhgpshdfgsdhfgsdhfgpsdfhgsdhfgsdfhgsdiufhgpshudfgsdspoiduhgdpoiufghsiuhdfgoisdufhgoiduhfg"
    }
  ];

  getOfferte() {
    return this.offerte;
  }
}
