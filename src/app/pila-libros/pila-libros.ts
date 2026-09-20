import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pila-libros',
  imports: [],
  templateUrl: './pila-libros.html',
  styleUrl: './pila-libros.css',
})
export class PilaLibros {
  @Input() libros: any[]=[];
}
