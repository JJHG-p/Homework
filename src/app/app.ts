import { Component, signal } from '@angular/core';
import { LinkedList } from './linked-list';
import { DoublyLinkedList } from './doubly-linked-list';
import { CircularLinkedList } from './circular-linked-list';
import { CircularDoublyLinkedList } from './circular-doubly-linked-list';
import { PacientesEspera } from './pacientes-espera/pacientes-espera';
import { HistorialAtencion } from './historial-atencion/historial-atencion';
import { MedicoGuardia } from './medico-guardia/medico-guardia';
import { ComiteAdministrativo } from './comite-administrativo/comite-administrativo';

@Component({
  selector: 'app-root',
  imports: [PacientesEspera, HistorialAtencion, MedicoGuardia, ComiteAdministrativo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaPacientes = new LinkedList();
  pacientes = signal<string[]>([]);

  listaHistorial = new DoublyLinkedList();
  historial = signal<string[]>([]);

  listaMedicos = new CircularLinkedList();
  medicoActual = signal<any>(null);

  listaComite = new CircularDoublyLinkedList();
  miembroActual = signal<any>(null);

  constructor() {
    this.listaPacientes.append('Anamaria Torres');
    this.listaPacientes.append('Luis Gómez');
    this.listaPacientes.append('Marta Hinestroza');

    this.actualizarPacientes();

    this.listaMedicos.append('Dr. Pérez');
    this.listaMedicos.append('Dr. Gómez');
    this.listaMedicos.append('Dr. Hinestroza');
    this.medicoActual.set(this.listaMedicos.head);

    setInterval(() => {
      if (this.medicoActual()) {
        this.medicoActual.set(this.medicoActual().next);
      }
    }, 10000);

    this.listaComite.append('Director');
    this.listaComite.append('Subdirector');
    this.listaComite.append('Jefe de Enfermería');
    this.miembroActual.set(this.listaComite.head);

  }

  actualizarPacientes = () => {
    const arreglo: string[] = [];
    let current = this.listaPacientes.head;
    while (current) {
      arreglo.push(current.value);
      current = current.next;
    }

    this.pacientes.set(arreglo);
  }

  actualizarHistorial = () => {
    const arreglo: string[] = [];
    let current = this.listaHistorial.head;
    while (current) {
      arreglo.push(current.value);
      current = current.next;
    }

    this.historial.set(arreglo);
  }

  agregarPaciente = (nombre: string) => {
    if (!nombre) return;
    this.listaPacientes.append(nombre);
    this.actualizarPacientes();
  }

  atenderPaciente = () => {
    if (!this.listaPacientes.head) return;

    const paciente = this.listaPacientes.head.value;

    this.listaPacientes.remove(paciente);
    this.listaHistorial.append(paciente);

    this.actualizarPacientes();
    this.actualizarHistorial();
  }

  rotarMedicoManual = () => {

    if (this.medicoActual()) {
      this.medicoActual.set(this.medicoActual().next);
    }
  }

  siguienteMiembro = () => {

    if (this.miembroActual() && this.miembroActual().next) {
      this.miembroActual.set(this.miembroActual().next);
    }
  }

  anteriorMiembro = () => {

    if (this.miembroActual() && this.miembroActual().prev) {
      this.miembroActual.set(this.miembroActual().prev);
    }
  }

  
}
