import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-comite-administrativo',
  imports: [],
  templateUrl: './comite-administrativo.html',
  styleUrl: './comite-administrativo.css',
})
export class ComiteAdministrativo {
  @Input() miembroActual: any = null;
  @Output() siguiente = new EventEmitter<void>();
  @Output() anterior = new EventEmitter<void>();

}
