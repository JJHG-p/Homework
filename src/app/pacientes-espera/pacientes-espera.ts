import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pacientes-espera',
  imports: [],
  templateUrl: './pacientes-espera.html',
  styleUrl: './pacientes-espera.css',
})
export class PacientesEspera {
  @Input() pacientes: string [] = [];
  @Output() agregar = new EventEmitter<string>();
  @Output() atender = new EventEmitter<void>();
}
