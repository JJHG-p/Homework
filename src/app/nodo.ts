export class Nodo {
    valor: any;
    hijos: Nodo[];

    constructor(valor: any) {
        this.valor = valor;
        this.hijos = [];
    }

    agregarHijo(nodo: Nodo) {
        this.hijos.push(nodo);
    }
}