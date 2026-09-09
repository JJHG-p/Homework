import { Node } from './node';

export class CircularLinkedList {

    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    append(value: any) {
        const nodo = new Node(value);

        if (!this.head) {
            this.head = nodo;
            this.tail = nodo;
            this.tail.next = nodo;
            this.length++;
            return;
        }

        this.tail!.next = nodo;
        this.tail = nodo;
        this.tail.next = this.head;
        this.length++;
    }

    peek(value: any) {
        if (!this.head) return null;

        let current: Node | null = this.head;
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

        let current: Node | null = this.head;
        let anterior: Node | null = this.tail;
        let contador = 0;

        do {
            if (current!.value === value) {
                if (current === this.head) {    
                    this.head = current!.next;
                    if (this.tail) this.tail.next = this.head;
                }
                if (current === this.tail) {
                    this.tail = anterior;
                }

                anterior!.next = current!.next;
                this.length--;

                if (this.length === 0) {
                    this.head = null;
                    this.tail = null;
                }

                return current;
            }

            anterior = current;
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

        let current: Node | null = this.head;
        let result = '';
        do {
            result += current!.value + ' -> ';
            current = current!.next;
        } while (current !== this.head);

        console.log(result + '(vuelve a ' + this.head.value + ')');
    }
}