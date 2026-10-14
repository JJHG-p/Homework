import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { RealtimeCollectionService } from '../realtime-collection.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  providers: [RealtimeCollectionService],
  templateUrl: './tareas.html',
  styleUrl: './tareas.scss',
})
export class Tareas {
  private auth = inject(Auth);

  
  readonly tareasService = inject<RealtimeCollectionService<Tarea>>(RealtimeCollectionService)
    .init(`tareas/${this.auth.uid()}`);

  nuevoTitulo = signal<string>('');
  editandoId = signal<string | null>(null);
  textoEdicion = signal<string>('');

  async agregar() {
    const titulo = this.nuevoTitulo().trim();
    if (!titulo) return;

    try {
      await this.tareasService.add({ titulo, completada: false});
      this.nuevoTitulo.set('');
    } catch {
      // el servicio ya guardó el mensaje en error()
    }
  }

  async alternar(tarea: Tarea) {
    try {
      await this.tareasService.update(tarea.id!, { completada: !tarea.completada });
    } catch {
      // el servicio ya guardó el mensaje en error()
    }
  }

  editar(tarea: Tarea) {
    this.editandoId.set(tarea.id!);
    this.textoEdicion.set(tarea.titulo);
  }

  cancelar() {
    this.editandoId.set(null);
  }

  async guardar(tarea: Tarea) {
    const titulo = this.textoEdicion().trim();
    if (!titulo) return;

    try {
      await this.tareasService.update(tarea.id!, { titulo });
      this.editandoId.set(null);
    } catch {
      // el servicio ya guardó el mensaje en error()
    }
  }

  async eliminar(tarea: Tarea) {
    try {
      await this.tareasService.deleteItem(tarea.id!);
    } catch {
      // el servicio ya guardó el mensaje en error()
    }
  }
}
