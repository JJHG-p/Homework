import { Component, signal } from '@angular/core';
import { CircularDoublyLinkedList } from './circular-doubly-linked-list'; 
import { Producto } from './producto/producto';

@Component({
  selector: 'app-root',
  imports: [Producto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaProductos = new CircularDoublyLinkedList();
  productoActual = signal<any>(null);

  constructor() {
    this.listaProductos.append('Laptop Lenovo');
    this.listaProductos.append('Mause Logitech');
    this.listaProductos.append('Teclado Mecánico');
    this.listaProductos.append('Monitor LG 24"');

    this.productoActual.set(this.listaProductos.head);

    setInterval(() => {
      this.siguienteProducto();
    }, 5000);

  }

  siguienteProducto = () => {
    if (this.productoActual()) {
      this.productoActual.set(this.productoActual().next)
    }
  }

  anteriorProducto = () => {
    if (this.productoActual()) {
      this.productoActual.set(this.productoActual().prev);
    }
  }
}
