import { Product } from "./product";

export class TrieNode {
    value: string | null;
    isEndOfWord: boolean;
    children: { [letter: string]: TrieNode };
    product: Product | null;

    constructor(value: string | null) {
        this.value = value;
        this.isEndOfWord = false;
        this.children = {};
        this.product = null;
    }
}

export class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode(null);
    }

    insert(name: string, popularity: number) {
        let current = this.root;

        for (const character of name.toLowerCase()) {
            if (current.children[character] === undefined) {
                current.children[character] = new TrieNode(character);
            }
            current = current.children[character];
        }

        current.isEndOfWord = true;
        current.product = { name, popularity };
    }

    search(word: string): boolean {
        let current = this.root;

        for (const character of word.toLowerCase()) {
            if (current.children[character] === undefined) {
                return false;
            }
            current = current.children[character];
        }
        return current.isEndOfWord;
    }

    searchPrefix(prefix: string): Product[] {
        let current = this.root;

        for (const character of prefix.toLowerCase()) {
            if (current.children[character] === undefined) {
                return [];
            }
            current = current.children[character];
        }

        const found: Product[] = [];
        const pending: TrieNode[] = [current];

        while (pending.length > 0) {
            const node = pending.pop()!;

            if (node.isEndOfWord && node.product) {
                found.push(node.product);
            }
            for (const letter of Object.keys(node.children)) {
                pending.push(node.children[letter]);
            }
        }
        return found;
    }
}