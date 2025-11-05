import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  prodotti = [
    {
      nomeProdotto: "Smart TV LG OLED 55'' 4K",
      costo: 1199.99,
      descrizione: "TV OLED 55 pollici con risoluzione 4K Ultra HD, supporto HDR10 e Dolby Vision. Sistema operativo webOS 23.",
      durataGaranzia: 3
    },
    {
      nomeProdotto: "Notebook ASUS ZenBook 14",
      costo: 999.00,
      descrizione: "Ultrabook leggero con processore Intel i7, 16 GB di RAM, SSD da 512 GB e schermo OLED Full HD.",
      durataGaranzia: 2
    },
    {
      nomeProdotto: "Smartphone Samsung Galaxy S24",
      costo: 899.90,
      descrizione: "Display AMOLED da 6.1'', tripla fotocamera da 50 MP, processore Snapdragon 8 Gen 3 e batteria da 4500 mAh.",
      durataGaranzia: 2
    },
    {
      nomeProdotto: "Cuffie Bose QuietComfort Ultra",
      costo: 349.99,
      descrizione: "Cuffie wireless con cancellazione attiva del rumore, Bluetooth multipoint e autonomia di 24 ore.",
      durataGaranzia: 1
    },
    {
      nomeProdotto: "Smartwatch Apple Watch Series 10",
      costo: 529.00,
      descrizione: "Display Always-On, monitoraggio ECG, SpO2 e nuova funzione di rilevamento cadute. Compatibile con iPhone.",
      durataGaranzia: 2
    },
    {
      nomeProdotto: "Console Xbox Series X",
      costo: 549.00,
      descrizione: "Potente console con 1TB SSD, supporto 4K e frame rate fino a 120fps. Include controller wireless nero.",
      durataGaranzia: 3
    }
  ];

  getProdotti() {
    return this.prodotti;
  }
}
