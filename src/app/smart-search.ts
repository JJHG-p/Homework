import { MinHeap } from "./min-heap";
import { Product } from "./product";
import { Trie } from "./trie";

export class SmartSearch {
    private trie = new Trie();

    insert(name: string, popularity: number) {
        this.trie.insert(name, popularity);
    }

    all(): Product[] {
        return this.trie.searchPrefix('');
    }

    searchTopK(prefix: string, k: number): Product[] {
        if (k <= 0) {
            return [];
        }

        const candidates = this.trie.searchPrefix(prefix);

        const heap = new MinHeap();
        for (const product of candidates) {
            heap.push(product);
            if (heap.size() > k) {
                heap.pop();
            }
        }

        const result: Product[] = [];
        while (heap.size() > 0) {
            result.unshift(heap.pop()!);
        }
        return result;
    }
}