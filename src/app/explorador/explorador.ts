import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { ArbolNario } from '../arbol-nario';
import { NodoDB } from '../nodo-db';
import { NodoItem } from '../nodo-item/nodo-item';
import { RealtimeCollectionService } from '../realtime-collection.service';
import { Seleccion } from '../seleccion'; 

@Component({
  selector: 'app-explorador',
  imports: [FormsModule, NodoItem],
  providers: [RealtimeCollectionService, Seleccion],
  templateUrl: './explorador.html',
  styleUrl: './explorador.scss',
})
export class Explorador {
  private auth = inject(Auth);

  readonly seleccion = inject(Seleccion);
  readonly nodosService = inject<RealtimeCollectionService<NodoDB>>(RealtimeCollectionService).init('nodos');

  nombre = signal<string>('');

  readonly arbol = computed(() => ArbolNario.desde(this.nodosService.results()));
  readonly total = computed(() => this.arbol().contar());

  readonly carpetaActual = computed(
    () => this.arbol().buscar(this.seleccion.carpetaId()) ?? this.arbol().raiz
  );

  async crear(tipo: 'carpeta' | 'archivo') {

    const nombre = this.nombre().trim();
    if (!nombre) return;

    const correo = this.auth.usuario();
    if (!correo) {
      alert('Debes iniciar sesión para crear carpetas o archivos');
      return;
    }

    const padre = this.carpetaActual();
    if (!padre.esCarpeta()) {
      alert('Solo puedes crear dentro de una carpeta');
      return;
    }

    try {
      await this.nodosService.add({
        nombre,
        tipo,
        padreId: padre.id,
        creadoPor: correo,
        creadoEn: Date.now()
      });
      this.nombre.set('');
    } catch {
      // ya el servicio guardo el mensaje en error()
    }
  }
}
