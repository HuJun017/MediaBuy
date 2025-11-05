import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  prodotti = [
    {
      nome: "Smart TV LG OLED 55'' 4K",
      costo: 1199.99,
      descrizione: "TV OLED 55 pollici con risoluzione 4K Ultra HD, supporto HDR10 e Dolby Vision. Sistema operativo webOS 23.",
      durataGaranzia: 3,
      immagine: "https://www.lg.com/content/dam/channel/wcms/it/oled-tvs/2023/c3-pdp-update/gallery/55c3a/2010-1.jpg/jcr:content/renditions/thum-1600x1062.jpeg"
    },
    {
      nome: "Notebook ASUS ZenBook 14",
      costo: 999.00,
      descrizione: "Ultrabook leggero con processore Intel i7, 16 GB di RAM, SSD da 512 GB e schermo OLED Full HD.",
      durataGaranzia: 2,
      immagine: "https://www.notebookcheck.it/typo3temp/_processed_/0/d/csm_LD0005429249_2_02_47a513fa77.jpg"
    },
    {
      nome: "Smartphone Samsung Galaxy S24",
      costo: 899.90,
      descrizione: "Display AMOLED da 6.1'', tripla fotocamera da 50 MP, processore Snapdragon 8 Gen 3 e batteria da 4500 mAh.",
      durataGaranzia: 2,
      immagine: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_135946103/fee_786_587_png"
    },
    {
      nome: "Cuffie Bose QuietComfort Ultra",
      costo: 349.99,
      descrizione: "Cuffie wireless con cancellazione attiva del rumore, Bluetooth multipoint e autonomia di 24 ore.",
      durataGaranzia: 1,
      immagine: "https://m.media-amazon.com/images/I/51ZR4lyxBHL.jpg"
    },
    {
      nome: "Smartwatch Apple Watch Series 10",
      costo: 529.00,
      descrizione: "Display Always-On, monitoraggio ECG, SpO2 e nuova funzione di rilevamento cadute. Compatibile con iPhone.",
      durataGaranzia: 2,
      immagine: "https://m.media-amazon.com/images/I/61d57c-mBfL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      nome: "Console Xbox Series X",
      costo: 549.00,
      descrizione: "Potente console con 1TB SSD, supporto 4K e frame rate fino a 120fps. Include controller wireless nero.",
      durataGaranzia: 3,
      immagine: "https://media-assets.wired.it/photos/6304e7c4163b4a866140bfb2/16:9/w_2560%2Cc_limit/Xbox-Series-X-Amazon.jpg"
    }
  ];

  getProdotti() {
    return this.prodotti;
  }
}
