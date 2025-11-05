import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prodotto',
  standalone:true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prodotto.html',
  styleUrl: './prodotto.css',
})

export class Prodotto {
  @Input() nome!: string;
  @Input() costo!: number;
  @Input() descrizione!: string;
  @Input() durataGaranzia!: number;
  @Input() immagine!: string;  // ← Deve essere presente
}
