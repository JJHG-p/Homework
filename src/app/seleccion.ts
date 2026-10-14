import { Injectable, signal } from '@angular/core';

@Injectable()
export class Seleccion {
    carpetaId = signal<string>('raiz');

    seleccionar(id: string) {
        this.carpetaId.set(id);
    }
}