import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Catalogo } from '../catalogo';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.scss',
})
export class Buscador {
  protected readonly catalogo = inject(Catalogo);

  protected readonly mensajeExiste = signal('');
  protected readonly titulo = signal('');
  protected readonly artista = signal('');
  protected readonly relacionadaId = signal<number | null>(null);
  protected readonly mensajeInsertar = signal('');
  protected readonly insertoBien = signal(false);

  cambiarPrefijo(valor: string) {
    this.catalogo.prefijo.set(valor);
    this.mensajeExiste.set('');
  }

  verificar() {
    const texto = this.catalogo.prefijo().trim();

    if (texto === '') {
      this.mensajeExiste.set('Escribe un título para buscar.');
      return;
    }

    if (this.catalogo.existe(texto)) {
      this.mensajeExiste.set(`"${texto}" existe en el catálogo.`);
    } else {
      this.mensajeExiste.set(`"${texto}" no existe en el catálogo.`);
    }
  }

  insertar() {
    const resultado = this.catalogo.agregar(this.titulo(), this.artista(), this.relacionadaId());

    this.mensajeInsertar.set(resultado.mensaje);
    this.insertoBien.set(resultado.ok);

    if (resultado.ok) {
      this.titulo.set('');
      this.artista.set('');
      this.relacionadaId.set(null);
    }
  }
}
