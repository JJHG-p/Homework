import { Node } from './node';

export class LinkedList {
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
        } else {
            this.tail!.next = nodo;
        }

        this.tail = nodo;
        this.length++;
    }

    peek(value: any, current = this.head): Node | null {
        while ( current) {
            if (current.value === value){
                return current;
            }
            current = current.next;
        }

        return null;
    }

    size() {
        return this.length;
    }

    remove(value: any, current = this.head) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            
            }
            this.length--;
            return;
        }

        while (current && current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current && current.next) {
            current.next = current.next.next;
            if (!current.next) this.tail = current;
            this.length--;
        }

        return
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }

        console.log(result + 'null')
    }
}