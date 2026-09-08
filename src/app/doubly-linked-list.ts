export class Node {
    value: any;
    next: Node | null;
    prev: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    head : Node | null;
    tail: Node | null;
    length : number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value: any) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        this.tail!.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    remove(value: any) {
        if (!this.head) return null;
        let current: Node | null = this.head;

        while (current) {
            if (current.value === value) {

                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                }

                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;

                this.length--;
                return current;
            }
            current = current.next;
        }
        return null;
    }

    size() {
        return this.length;
    }
}