import { Component, inject } from '@angular/core';
import { Catalogo } from '../catalogo';

@Component({
  selector: 'app-relacionadas',
  imports: [],
  templateUrl: './relacionadas.html',
  styleUrl: './relacionadas.scss',
})
export class Relacionadas {
  protected readonly catalogo = inject(Catalogo);
}
