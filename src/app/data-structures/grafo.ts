export class Grafo {
    nodes: number[] = [];
    adjList = new Map<number, number[]>();

    addNode(id: number): void {
        if (!this.searchNode(id)) {
        this.nodes.push(id);
        this.adjList.set(id, []);
        }
    }

    searchNode(id: number): boolean {
        return this.adjList.has(id);
    }

    addEdge(id1: number, id2: number): void {
        if (id1 === id2 || !this.searchNode(id1) || !this.searchNode(id2)) {
            return;
        }

        const lista1 = this.adjList.get(id1) as number[];
        const lista2 = this.adjList.get(id2) as number[];

        if (!lista1.includes(id2)) {
            lista1.push(id2);
            lista2.push(id1);
        }
    }

    vecinos(id: number): number[] {
        return this.adjList.get(id) ?? [];
    }

    printAdjacency(): void {
        for (const id of this.nodes) {
            console.log(id, '->', this.vecinos(id).join(', '));
        }
    }
}