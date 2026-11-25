import { Cancion } from "../cancion";

export class MaxHeap {
    private datos: Cancion[] = [];

    tamano(): number {
        return this.datos.length;
    }

    estaVacio(): boolean {
        return this.datos.length === 0;
    }

    insertar(cancion: Cancion): void {
        this.datos.push(cancion);
        this.subir(this.datos.length - 1);
    }

    extraerMax(): Cancion | null {
        if (this.datos.length === 0) {
        return null;
        }

        const max = this.datos[0];
        const ultimo = this.datos.pop() as Cancion;

        if (this.datos.length > 0) {
        this.datos[0] = ultimo;
        this.bajar(0);
        }

        return max;
    }

    private subir(indice: number): void {
        while (indice > 0) {
            const padre = Math.floor((indice - 1) / 2);
            if (this.datos[padre].reproducciones >= this.datos[indice].reproducciones) {
                break;
            }
            this.intercambiar(padre, indice);
            indice = padre;
        }
    }

    private bajar(indice: number): void {
        const n = this.datos.length;

        while (true) {
            let mayor = indice;
            const izq = 2 * indice + 1;
            const der = 2 * indice + 2;

            if (izq < n && this.datos[izq].reproducciones > this.datos[mayor].reproducciones) {
                mayor = izq;
            }
            if (der < n && this.datos[der].reproducciones > this.datos[mayor].reproducciones) {
                mayor = der;
            }
            if (mayor === indice) {
                break;
            }

            this.intercambiar(indice, mayor);
            indice = mayor;
        }
    }

    private intercambiar(a: number, b: number): void {
        const temporal = this.datos[a];
        this.datos[a] = this.datos[b];
        this.datos[b] = temporal;
    }
}