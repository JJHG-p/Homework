export class Nodo {
    valor: any;
    hijos: Nodo[];

    izquierda: Nodo | null;
    derecha: Nodo | null;

    constructor(valor: any) {
        this.valor = valor;

        this.hijos = [];

        this.izquierda = null;
        this.derecha = null;
    }

    agregarHijo(nodo: Nodo) {
        this.hijos.push(nodo);
    }

    isLeaf() {
        if (this.izquierda === null && this.derecha === null) {
            return true;
        } else {
            return false;
        }
    }
}