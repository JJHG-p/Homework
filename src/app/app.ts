import { Component, signal } from '@angular/core';
import { Queue } from './queue';
import { PersonaForm } from './persona-form/persona-form';
import { ColaPersonas } from './cola-personas/cola-personas';

@Component({
  selector: 'app-root',
  imports: [PersonaForm, ColaPersonas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  colaAtm = new Queue();
  personas = signal<any[]>([]);

  constructor() {
    this.colaAtm.enqueue({ name: 'Sofia Rodriguez', amount: 200000, arrivalDate: this.fechaAleatoria() });
    this.colaAtm.enqueue({ name: 'Luis Cuaran', amount: 50000, arrivalDate: this.fechaAleatoria() });
    this.colaAtm.enqueue({ name: 'Marta Lucia', amount: 350000, arrivalDate: this.fechaAleatoria() });

    this.actualizarPersonas();
  }

  fechaAleatoria() : Date {
    const ahora = new Date();
    const minutosAtras = Math.floor(Math.random() * 120);
    return new Date(ahora.getTime() - minutosAtras * 60000);
  }

  actualizarPersonas = () => {
    const ordenadas = [...this.colaAtm.items].sort(
      (a, b) => a.arrivalDate.getTime() - b.arrivalDate.getTime()
    );
    this.personas.set(ordenadas);
  }

  agregarPersona = (persona: { name: string; amount: number }) => {
    const personaCompleta = {
      ...persona,
      arrivalDate: new Date()
    };
    this.colaAtm.enqueue(personaCompleta);
    this.actualizarPersonas();
  }
}
