import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-libro-form',
  imports: [],
  templateUrl: './libro-form.html',
  styleUrl: './libro-form.css',
})
export class LibroForm {
  @Output() agregar = new EventEmitter<{ name: string; isbn: string; author: string; editorial: string }>();

  agregarLibro(name: string, isbn: string, author: string, editorial: string){
    if (!name || !isbn || !author || !editorial) return;
    this.agregar.emit({ name, isbn, author, editorial });
  }
}
