import { Cancion } from "../cancion";

class NodoTrie {
    hijos = new Map<string, NodoTrie>();
    cancion: Cancion | null = null;
}

export class Trie {
    private raiz = new NodoTrie();

    private normalizar(texto: string): string {
        return texto.trim().toLowerCase();
    }

    insertar(cancion: Cancion): void {
        let actual = this.raiz;
        const clave = this.normalizar(cancion.titulo);

        for (const letra of clave) {
            let siguiente = actual.hijos.get(letra);
            if (!siguiente) {
                siguiente = new NodoTrie();
                actual.hijos.set(letra, siguiente);
            }
            actual = siguiente;
        }
        actual.cancion = cancion;
    }

    private buscarNodo(texto: string): NodoTrie | null {
        let actual = this.raiz;

        for (const letra of this.normalizar(texto)) {
            const siguiente = actual.hijos.get(letra);
            if (!siguiente) {
                return null;
            }
            actual = siguiente;
        }
        return actual;
    }

    existe(titulo: string): boolean {
        const nodo = this.buscarNodo(titulo);
        return nodo !== null && nodo.cancion !== null;
    }

    buscarPorPrefijo(prefijo: string): Cancion[] {
        const resultado: Cancion[] = [];
        const nodo = this.buscarNodo(prefijo);

        if (nodo !== null) {
        this.recolectar(nodo, resultado);
        }
        return resultado;
    }

    private recolectar(nodo: NodoTrie, resultado: Cancion[]): void {
        if (nodo.cancion !== null) {
            resultado.push(nodo.cancion);
        }

        for (const hijo of nodo.hijos.values()) {
            this.recolectar(hijo, resultado);
        }
    }
}