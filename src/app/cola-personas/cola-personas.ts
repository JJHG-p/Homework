import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cola-personas',
  imports: [],
  templateUrl: './cola-personas.html',
  styleUrl: './cola-personas.css',
})
export class ColaPersonas {
  @Input() personas: any[] = [];
}
