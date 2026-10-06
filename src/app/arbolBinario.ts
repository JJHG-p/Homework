import { Nodo } from './nodo';

export class ArbolBinario {
    raiz: Nodo | null;

    constructor() {
        this.raiz = null;
    }

    insertar(valor: number) {

        const nuevoNodo = new Nodo(valor);
        if (!this.raiz) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;
        while (true) {
            if (valor < actual.valor) {
                if (!actual.izquierda) {
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda;
            } else {
                if (!actual.derecha) {
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha;
            }
        }

    }

    preorden(nodo: Nodo | null) {
        if (!nodo) return;
        console.log(nodo.valor);
        this.preorden(nodo.izquierda);
        this.preorden(nodo.derecha);
    }

    inorden(nodo: Nodo | null) {
        if (!nodo) return;
        this.inorden(nodo.izquierda);
        console.log(nodo.valor);
        this.inorden(nodo.derecha);
    }

    postorden(nodo: Nodo | null) {
        if (!nodo) return;
        this.postorden(nodo.izquierda);
        this.postorden(nodo.derecha);
        console.log(nodo.valor);
    }

    buscar(valor: number) {
        let actual = this.raiz;

        while (actual) {
            if (valor === actual.valor) {
                return true;
            }

            if (valor < actual.valor) {
                actual = actual.izquierda;
            } else {
                actual = actual.derecha;
            }
        }

        return false;
    }
}