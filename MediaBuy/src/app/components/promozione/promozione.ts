import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promozione',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './promozione.html',
  styleUrl: './promozione.css',
})
export class Promozione {
  @Input() titolo!: string;
  @Input() content!: string;
  @Input() data!: string;
}
