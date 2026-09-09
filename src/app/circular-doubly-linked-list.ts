import { DoublyNode } from './doubly-node';

export class CircularDoublyLinkedList {

    head: DoublyNode | null;
    tail: DoublyNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    append(value: any) {
        const nodo = new DoublyNode(value);

        if (!this.head) {
            this.head = nodo;
            this.tail = nodo;
            this.tail.next = nodo;
            this.tail.prev = nodo;
            this.length++;
            return;
        }

        this.tail!.next = nodo;
        nodo.prev = this.tail;
        this.tail = nodo;
        this.tail.next = this.head;
        this.head.prev = this.tail;
        this.length++;
    }

    peek(value: any) {
        if (!this.head) return null;

        let current: DoublyNode | null = this.head;
        do {
            if (current!.value === value) return current;
            current = current!.next;
        } while (current !== this.head);

        return null;
    }

    size() {
        return this.length;
    }

    remove(value: any) {
        if (!this.head) return null;

        let current: DoublyNode | null = this.head;
        let contador = 0;

        do {
            if (current!.value === value) {
                if (current === this.head) {    
                    this.head = current!.next;
                }
                if (current === this.tail) {
                    this.tail = current!.prev;
                }

                current!.prev!.next = current!.next;
                current!.next!.prev = current!.prev;
                this.length--;

                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                }

                return current;
            }

            current = current!.next;
            contador++;
        } while (current !== this.head && contador < this.length);

        return null;
    }

    print() {
        if (!this.head) {
            console.log('Lista vacía');
            return;
        }

        let current: DoublyNode | null = this.head;
        let result = '';
        do {
            result += current!.value + ' -> ';
            current = current!.next;
        } while (current !== this.head);

        console.log(result + '(vuelve a ' + this.head.value + ')');
    }

}