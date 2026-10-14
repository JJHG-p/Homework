import { Nodo } from './nodo';
import { NodoDB } from './nodo-db';

export class ArbolNario {
    raiz: Nodo;

    constructor() {
        this.raiz = new Nodo('raiz', 'Raíz', 'carpeta', '');
    }

    buscar(id: string, nodo: Nodo = this.raiz): Nodo | null {
        if (nodo.id === id) {
            return nodo;
        }
        for (const hijo of nodo.hijos) {
            const encontrado = this.buscar(id, hijo);
            if (encontrado) {
                return encontrado;
            }
        }
        return null;
    }

    contar(nodo: Nodo = this.raiz): number {
        let total = 0;
        for (const hijo of nodo.hijos) {
            total += 1 + this.contar(hijo);
        }
        return total;
    }

    static desde(lista: NodoDB[]): ArbolNario {
        const arbol = new ArbolNario();
        let pendientes = [...lista].sort((a, b) => a.creadoEn - b.creadoEn);
        let huboProgreso = true;

        while (pendientes.length > 0 && huboProgreso) {
            huboProgreso = false;
            const siguientes: NodoDB[] = [];

            for (const dato of pendientes) {
                const nodo = new Nodo(dato.id!, dato.nombre, dato.tipo, dato.creadoPor);
                const padre = arbol.buscar(dato.padreId);

                if (padre && padre.agregarHijo(nodo)) {
                    huboProgreso = true;
                } else {
                    siguientes.push(dato);
                }
            }
            pendientes = siguientes;
        }

    return arbol;
  }
}