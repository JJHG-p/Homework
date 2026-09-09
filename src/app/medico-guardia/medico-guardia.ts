import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medico-guardia',
  imports: [],
  templateUrl: './medico-guardia.html',
  styleUrl: './medico-guardia.css',
})
export class MedicoGuardia {
  @Input() medicoActual: any = null;
  @Output() rotar = new EventEmitter<void>();
}
