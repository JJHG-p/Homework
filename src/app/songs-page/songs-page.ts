import { Component, signal } from '@angular/core';
import { LinkedList } from '../linked-list';

@Component({
  selector: 'app-songs-page',
  imports: [],
  templateUrl: './songs-page.html',
  styleUrl: './songs-page.css',
})
export class SongsPage {

  listaCanciones = new LinkedList();
  cancionActual = signal<any>(null);

  constructor(){
    this.listaCanciones.append("Bohemian Rhapsody - Queen");
    this.listaCanciones.append("Billie Jean - Michael Jackson");
    this.listaCanciones.append("Creep - Radiohead");
    this.listaCanciones.append("Don't Cry - Guns N'Roses");

    this.cancionActual.set(this.listaCanciones.head);
  }

  siguienteCancion = () => {
    if (this.cancionActual() && this.cancionActual().next){
      this.cancionActual.set(this.cancionActual().next);
    }
  }

  reiniciar = () => {
    this.cancionActual.set(this.listaCanciones.head);
  }

}
