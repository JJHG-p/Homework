import { Component, signal } from '@angular/core';
import { DoublyLinkedList } from '../doubly-linked-list';

@Component({
  selector: 'app-browser-page',
  imports: [],
  templateUrl: './browser-page.html',
  styleUrl: './browser-page.css',
})
export class BrowserPage {
  historial = new DoublyLinkedList();
  paginaActual = signal<any>(null);

  constructor() {
    this.historial.append("google.com");
    this.historial.append("youtube.com");
    this.historial.append("github.com");
    this.historial.append("angular.dev");

    this.paginaActual.set(this.historial.head);
  }

  atras = () => {
    if (this.paginaActual() && this.paginaActual().prev){
      this.paginaActual.set(this.paginaActual().prev);
    }
  }

  adelante = () => {
    if (this.paginaActual() && this.paginaActual().next){
      this.paginaActual.set(this.paginaActual().next);
    }
  }
}
