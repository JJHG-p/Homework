import { Injectable, computed, signal } from '@angular/core';
import { Cancion } from './cancion';
import { Trie } from './data-structures/trie';
import { MaxHeap } from './data-structures/max-heap';
import { Grafo } from './data-structures/grafo';

const DATOS_INICIALES = [
  { titulo: 'Smile Again', artista: 'Luna Roja', reproducciones: 120 },
  { titulo: 'Sol de Verano', artista: 'Los Faroles', reproducciones: 340 },
  { titulo: 'Sonrisa de Luna', artista: 'Luna Roja', reproducciones: 210 },
  { titulo: 'Sunset Drive', artista: 'Neon Road', reproducciones: 480 },
  { titulo: 'Salsa Nocturna', artista: 'Orquesta Cali', reproducciones: 390 },
  { titulo: 'Sueño Tropical', artista: 'Los Faroles', reproducciones: 150 },
  { titulo: 'Cumbia del Río', artista: 'Raíces', reproducciones: 275 },
  { titulo: 'Cielo Abierto', artista: 'Neon Road', reproducciones: 95 },
  { titulo: 'Amanecer en Cali', artista: 'Orquesta Cali', reproducciones: 510 },
  { titulo: 'Ritmo de Barrio', artista: 'Raíces', reproducciones: 305 },
  { titulo: 'Smooth Night', artista: 'Neon Road', reproducciones: 260 },
  { titulo: 'Besos de Sal', artista: 'Marea Alta', reproducciones: 180 },
  { titulo: 'Camino a Casa', artista: 'Marea Alta', reproducciones: 420 },
  { titulo: 'Fiesta Latina', artista: 'Orquesta Cali', reproducciones: 365 },
];

const RELACIONES = [
  [1, 3], [1, 11], [2, 6], [2, 12], [2, 4], [3, 8], [4, 8], [4, 11],
  [5, 9], [5, 14], [5, 10], [7, 10], [7, 14], [9, 10], [12, 13], [13, 8],
];

@Injectable({
  providedIn: 'root',
})
export class Catalogo {
  readonly top = 5;

  private trie = new Trie();
  private grafo = new Grafo();
  private siguienteId = 1;

  readonly canciones = signal<Cancion[]>([]);
  readonly prefijo = signal('');
  readonly seleccionadaId = signal<number | null>(null);

  readonly sugerencias = computed(() => {
    this.canciones(); 
    const texto = this.prefijo().trim();
    if (texto === '') {
      return [];
    }
    return this.trie.buscarPorPrefijo(texto);
  });

  readonly ranking = computed(() => {
    const heap = new MaxHeap();
    for (const cancion of this.canciones()) {
      heap.insertar(cancion);
    }

    const resultado: Cancion[] = [];
    while (resultado.length < this.top && !heap.estaVacio()) {
      resultado.push(heap.extraerMax() as Cancion);
    }
    return resultado;
  });

  readonly seleccionada = computed(() => {
    const id = this.seleccionadaId();
    for (const cancion of this.canciones()) {
      if (cancion.id === id) {
        return cancion;
      }
    }
    return null;
  });

  readonly relacionadas = computed(() => {
    const lista = this.canciones();
    const elegida = this.seleccionada();
    const resultado: Cancion[] = [];

    if (elegida === null) {
      return resultado;
    }

    for (const idVecino of this.grafo.vecinos(elegida.id)) {
      for (const cancion of lista) {
        if (cancion.id === idVecino) {
          resultado.push(cancion);
        }
      }
    }
    return resultado;
  });

  constructor() {
    const lista: Cancion[] = [];

    for (const dato of DATOS_INICIALES) {
      lista.push(this.crear(dato.titulo, dato.artista, dato.reproducciones));
    }
    for (const par of RELACIONES) {
      this.grafo.addEdge(par[0], par[1]);
    }

    this.canciones.set(lista);
  }

  private crear(titulo: string, artista: string, reproducciones: number): Cancion {
    const cancion: Cancion = { id: this.siguienteId, titulo, artista, reproducciones };
    this.siguienteId++;
    this.trie.insertar(cancion);
    this.grafo.addNode(cancion.id);
    return cancion;
  }

  existe(titulo: string): boolean {
    return this.trie.existe(titulo);
  }

  agregar(titulo: string, artista: string, relacionadaId: number | null): { ok: boolean; mensaje: string } {
    const limpio = titulo.trim();

    if (limpio === '') {
      return { ok: false, mensaje: 'Escribe el título de la canción.' };
    }
    if (this.trie.existe(limpio)) {
      return { ok: false, mensaje: `"${limpio}" ya existe en el catálogo.` };
    }

    const cancion = this.crear(limpio, artista.trim() || 'Desconocido', 0);

    if (relacionadaId !== null) {
      this.grafo.addEdge(cancion.id, relacionadaId);
    }

    this.canciones.update(function (lista) {
      return lista.concat([cancion]);
    });

    return { ok: true, mensaje: `"${limpio}" fue insertada.` };
  }

  reproducir(id: number): void {
    this.canciones.update(function (lista) {
      return lista.map(function (cancion) {
        if (cancion.id === id) {
          return { ...cancion, reproducciones: cancion.reproducciones + 1 };
        }
        return cancion;
      });
    });
  }

  seleccionar(id: number): void {
    this.seleccionadaId.set(id);
  }
}
