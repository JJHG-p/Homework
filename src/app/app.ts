import { Component, signal } from '@angular/core';
import { Stack } from './stack';
import { LibroForm } from './libro-form/libro-form';
import { PilaLibros } from './pila-libros/pila-libros';

@Component({
  selector: 'app-root',
  imports: [LibroForm, PilaLibros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pilaLibros = new Stack();
  libros = signal<any[]>([]);

  constructor() {
    this.pilaLibros.push({ name: 'Wigetta Un viaje mágico', isbn: '978-8490435482', author: 'Vegetta777 y Willyrex', editorial: 'Planeta del libro'});
    this.pilaLibros.push({ name: 'La Odisea', isbn: '978-8420674209', author: 'Homero', editorial: 'Alianza Editorial'});
    this.pilaLibros.push({ name: 'Spider-Man: Miles Morales', isbn: '978-1302906863', author: 'Brian Michael Bendis', editorial: 'Marvel Comics'});
    this.pilaLibros.push({ name: 'Cien años de soledad', isbn: '978-0060883287', author: 'Gabriel García Márquez', editorial: 'Sudamericana' });

    this.actualizarLibros();
  }

  actualizarLibros = () => {
    this.libros.set(this.pilaLibros.items.slice().reverse());
  }

  agregarLibro = (libro: { name: string; isbn: string; author: string; editorial: string }) => {
    this.pilaLibros.push(libro);
    this.actualizarLibros();
  }
}
