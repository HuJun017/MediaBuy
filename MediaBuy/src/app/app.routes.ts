import { Routes } from '@angular/router';

import { Pagina1Offerte } from './components/pagina-1-offerte/pagina-1-offerte';
import { Pagina2Catalogo } from './components/pagina-2-catalogo/pagina-2-catalogo';
import { Pagina3Termini } from './components/pagina-3-termini/pagina-3-termini';

export const routes: Routes = [
  { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
  { path: 'pagina1', component: Pagina1Offerte },
  { path: 'pagina2', component: Pagina2Catalogo },
  { path: 'pagina3', component: Pagina3Termini },
  { path: '**', redirectTo: '/pagina1' } 
];