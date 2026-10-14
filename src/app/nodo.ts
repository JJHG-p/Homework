export class Nodo {
    id: string;
    nombre: string;
    tipo: 'carpeta' | 'archivo';
    creadoPor: string;
    hijos: Nodo[];

    constructor(id: string, nombre: string, tipo: 'carpeta' | 'archivo', creadoPor: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.creadoPor = creadoPor;
        this.hijos = [];
    }

    esCarpeta() {
        return this.tipo === 'carpeta';
    }

    agregarHijo(nodo: Nodo) {
        if (this.tipo === 'archivo') {
            return false;
        }
        this.hijos.push(nodo);
        return true;
    }
}