import { Component, inject } from '@angular/core';
import { Catalogo } from '../catalogo';

@Component({
  selector: 'app-ranking',
  imports: [],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss',
})
export class Ranking {
  protected readonly catalogo = inject(Catalogo);

  porcentaje(reproducciones: number): number {
    const lista = this.catalogo.ranking();

    if (lista.length === 0 || lista[0].reproducciones === 0) {
      return 0;
    }

    return (reproducciones / lista[0].reproducciones) * 100;
  }
}
