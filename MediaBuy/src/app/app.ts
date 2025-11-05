import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina1Offerte } from './components/pagina-1-offerte/pagina-1-offerte';
import { Pagina2Catalogo } from './components/pagina-2-catalogo/pagina-2-catalogo';
import { Pagina3Termini } from './components/pagina-3-termini/pagina-3-termini';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Pagina1Offerte, Pagina2Catalogo, Pagina3Termini, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {




  mostraMessaggioBenvenuto = true;
  inizializzazione() {
    this.mostraMessaggioBenvenuto = false;
  }


}
