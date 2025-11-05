import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffertePromozioniService {
  offerte = [
    {
      data: "24 - 10 - 2025",
      titolo: "Offerte Pre-Black Friday",
      content: "sgdofigasdifgsioutgirghpifduhfogiughspoiduhgdpoiufghsiuhdfgoisdufhgoiduhfg",
      immagine: "https://www.shutterstock.com/image-vector/black-friday-background-preblack-sale-260nw-1853211397.jpg"
    },
    {
      data: "27 - 10 - 2025",
      titolo: "Offerte Pre-Black Friday Plus",
      content: "sgdofigdfgdfighdifghisufhgwperuhgpshdfgsdhfgsdhfgpsdfhgsdhfgsdfhgsdiufhgpshudfgsdspoiduhgdpoiufghsiuhdfgoisdufhgoiduhfg",
      immagine: "https://www.shutterstock.com/image-vector/preblack-friday-sale-banner-why-260nw-496464154.jpg"
    }
  ];

  getOfferte() {
    return this.offerte;
  }
}
