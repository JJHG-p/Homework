import { Component, inject, Input, signal } from '@angular/core';
import { Auth } from '../auth';
import { Nodo } from '../nodo';
import { NodoDB } from '../nodo-db';
import { RealtimeCollectionService } from '../realtime-collection.service';
import { Seleccion } from '../seleccion';

@Component({
  selector: 'app-nodo-item',
  imports: [NodoItem],
  templateUrl: './nodo-item.html',
  styleUrl: './nodo-item.scss',
})
export class NodoItem {
  @Input() nodo!: Nodo;

  private auth = inject(Auth);
  private seleccion = inject(Seleccion);
  private nodosService = inject<RealtimeCollectionService<NodoDB>>(RealtimeCollectionService);

  abierto = signal<boolean>(true);

  estaSeleccionado() {
    return this.seleccion.carpetaId() === this.nodo.id;
  }

  alternar() {

    if (!this.nodo.esCarpeta()) return;

    this.abierto.set(!this.abierto());
    this.seleccion.seleccionar(this.nodo.id);
  }

  puedeEliminar() {
    return this.nodo.creadoPor === this.auth.usuario() && this.nodo.hijos.length === 0;
  }

  async eliminar() {
    try {
      await this.nodosService.deleteItem(this.nodo.id);
    } catch {
      // ya elk servicio guardo el mensaje en error()
    }
  }
}
