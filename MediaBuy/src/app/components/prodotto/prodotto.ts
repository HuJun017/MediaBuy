import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prodotto',
  imports: [CommonModule, RouterLink],
  templateUrl: './prodotto.html',
  styleUrl: './prodotto.css',
})
export class Prodotto {
  @Input() titolo!: string;
}
