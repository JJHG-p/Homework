import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';

export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: { url: string };
  };
}

@Injectable({
  providedIn: 'root',
})
export class Giphy {
  gifs = signal<Gif[]>([]);
  cargando = signal(false);
  error = signal('');

  private controlador: AbortController | null = null;

  async buscar(texto: string) {
    if (this.controlador) {
      this.controlador.abort();
    }

    const limpio = texto.trim();

    if (limpio.length < 2) {
      this.controlador = null;
      this.gifs.set([]);
      this.error.set('');
      this.cargando.set(false);
      return;
    }

    const controlador = new AbortController();
    this.controlador = controlador;

    this.cargando.set(true);
    this.error.set('');

    try {
      const params = new URLSearchParams({
        api_key: environment.giphyApiKey,
        q: limpio,
        limit: '25',
        offset: '0',
        rating: 'g',
        lang: 'en',
      });

      const res = await fetch(`${environment.giphyUrl}/search?${params}`, {
        signal: controlador.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();
      this.gifs.set(json.data);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }

      console.error('Error: ', error);
      const detalle = error instanceof Error ? error.message : 'desconocido';
      this.error.set('No se pudieron cargar los GIFs (${detalle})');
    } finally {
      if (this.controlador === controlador) {
        this.cargando.set(false);
      }
    }
  }
}
