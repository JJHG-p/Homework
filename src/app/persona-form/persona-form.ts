import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona-form',
  imports: [],
  templateUrl: './persona-form.html',
  styleUrl: './persona-form.css',
})
export class PersonaForm {
  @Output() agregar = new EventEmitter<{ name: string; amount: number }>();

  agregarPersona(name: string, amount: string) {
    if (!name || !amount) return;
    this.agregar.emit({ name, amount: Number(amount) });
  }
}
