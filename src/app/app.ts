import { Component } from '@angular/core';
import { Buscador } from './buscador/buscador';
import { Ranking } from './ranking/ranking';
import { Relacionadas } from './relacionadas/relacionadas';

@Component({
  selector: 'app-root',
  imports: [Buscador, Ranking, Relacionadas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
