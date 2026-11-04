export interface Nodo {
    id: string;
    tipo: 'persona' | 'ciudad';
    nombre: string;
    edad?: number;
    ciudadId?: string;
}

export class Grafo {
    nodes: Nodo[] = [];
    adjList: { [id: string]: string[] } = {};

    addNode(node: Nodo) {
        if (!this.searchNode(node.id)) {
            this.nodes.push(node);
            this.adjList[node.id] = [];
        }
    }

    addEdge(id1: string, id2: string) {
        if (!this.searchNode(id1) || !this.searchNode(id2)) {
            return;
        }
        if (this.adjList[id1].indexOf(id2) !== -1) {
            return;
        }
        this.adjList[id1].push(id2);
        this.adjList[id2].push(id1);
    }

    searchNode(id: string): Nodo | undefined {
        for (const nodo of this.nodes) {
            if (nodo.id === id) {
                return nodo;
            }
        }
        return undefined;
    }

    printAdjacency(id: string) {
        if (this.searchNode(id)) {
            console.log(this.adjList[id]);
        }
    }

    isEmpty() {
        return this.nodes.length === 0;
    }

    removeNode(id: string) {
        if (!this.searchNode(id)) {
            return;
        }
        this.nodes = this.nodes.filter(function (nodo) {
            return nodo.id !== id;
        });
        delete this.adjList[id];

        for (const otro of this.nodes) {
            this.adjList[otro.id] = this.adjList[otro.id].filter(function (vecino) {
                return vecino !== id;
            });
        }
    }

    printGraph() {
        console.log(this.adjList);
    }

    personasDeCiudad(ciudadId: string): Nodo[] {
        const personas: Nodo[] = [];
        if (!this.searchNode(ciudadId)) {
            return personas;
        }
        for (const vecinoId of this.adjList[ciudadId]) {
            const vecino = this.searchNode(vecinoId);
            if (vecino && vecino.tipo === 'persona') {
                personas.push(vecino);
            }
        }
        return personas;
    }
}