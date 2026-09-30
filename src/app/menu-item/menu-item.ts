import { Component, Input, } from '@angular/core';
import { Nodo } from '../nodo';

@Component({
  selector: 'app-menu-item',
  imports: [MenuItem],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class MenuItem {
  @Input() nodo!: Nodo;
  @Input() seleccionado!: { titulo: string | null};

  abierto = false;

  tieneHijos() {
    return this.nodo.hijos.length > 0;
  }

  alternar() {
    if (this.tieneHijos()) {
      this.abierto = !this.abierto;
    } else {
      this.seleccionado.titulo = this.nodo.valor.title;
    }
  }

  estaSeleccionado() {
    return this.seleccionado.titulo === this.nodo.valor.title;
  }

  obtenerFlecha() {
    if (this.abierto) {
      return 'Cerrar';
    } else {
      return 'Abrir';
    }
  }
}
