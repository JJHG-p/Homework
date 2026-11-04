import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
import { Grafo, Nodo } from './grafo';

interface NodoVista extends d3.SimulationNodeDatum {
  id: string;
  tipo: 'persona' | 'ciudad';
  nombre: string;
  edad?: number;
}

interface EnlaceVista extends d3.SimulationLinkDatum<NodoVista> {}

interface Linea {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private grafo = new Grafo();
  private contador = 0;
  private simulacion: d3.Simulation<NodoVista, EnlaceVista> | null = null;

  version = signal<number>(0);
  puntos = signal<NodoVista[]>([]);
  lineas = signal<Linea[]>([]);
  mensaje = signal<string>('');

  nombreCiudad = signal<string>('');
  nombrePersona = signal<string>('');
  edadPersona = signal<string>('');
  ciudadPersona = signal<string>('');
  amigoA = signal<string>('');
  amigoB = signal<string>('');
  ciudadVer = signal<string>('');

  ciudades = computed(() => {
    this.version();
    const lista: Nodo[] = [];
    for (const nodo of this.grafo.nodes) {
      if (nodo.tipo === 'ciudad') lista.push(nodo);
    }
    return lista;
  });

  personas = computed(() => {
    this.version();
    const lista: Nodo[] = [];
    for (const nodo of this.grafo.nodes) {
      if (nodo.tipo === 'persona') lista.push(nodo);
    }
    return lista;
  });

  personasEnCiudad = computed(() => {
    this.version();
    return this.grafo.personasDeCiudad(this.ciudadVer());
  });

  constructor() {
    this.crearCiudad('Cali');
    this.crearCiudad('Bogotá');
    this.crearPersona('Ana', 20, 'c1');
    this.crearPersona('Luis', 22, 'c1');
    this.crearPersona('Marta', 19, 'c2');
    this.grafo.addEdge('p3', 'p4');
    this.grafo.addEdge('p4', 'p5');
    this.ciudadPersona.set('c1');
    this.ciudadVer.set('c1');
    this.refrescar();
  }

  private crearCiudad(nombre: string) {
    this.contador++;
    this.grafo.addNode({ id: 'c' + this.contador, tipo: 'ciudad', nombre });
  }

  private crearPersona(nombre: string, edad: number, ciudadId: string) {
    this.contador++;
    const id = 'p' + this.contador;
    this.grafo.addNode({ id, tipo: 'persona', nombre, edad, ciudadId });
    this.grafo.addEdge(id, ciudadId);
  }

  agregarCiudad() {
    const nombre = this.nombreCiudad().trim();
    if (!nombre) {
      this.mensaje.set('Escribe el nombre de la ciudad');
      return;
    }
    this.crearCiudad(nombre);
    this.nombreCiudad.set('');
    this.mensaje.set('');
    this.refrescar();
  }

  agregarPersona() {
    const nombre = this.nombrePersona().trim();
    const edad = Number(this.edadPersona());
    if (!nombre || !edad || !this.ciudadPersona()) {
      this.mensaje.set('La persona necesita nombre, edad y ciudad');
      return;
    }
    this.crearPersona(nombre, edad, this.ciudadPersona());
    this.nombrePersona.set('');
    this.edadPersona.set('');
    this.mensaje.set('');
    this.refrescar();
  }

  agregarAmistad() {
    const a = this.amigoA();
    const b = this.amigoB();
    if (!a || !b || a === b) {
      this.mensaje.set('Elige dos personas distintas');
      return;
    }
    this.grafo.addEdge(a, b);
    this.mensaje.set('');
    this.refrescar();
  }

  imprimirCiudad() {
    const ciudad = this.grafo.searchNode(this.ciudadVer());
    if (!ciudad) return;

    console.log('Personas que viven en ' + ciudad.nombre + ':');
    for (const persona of this.personasEnCiudad()) {
      console.log(persona.nombre + ' (' + persona.edad + ' años)');
    }
  }

  private refrescar() {
    this.version.update(function (v) {
      return v + 1;
    });
    this.dibujar();
  }

  private dibujar() {
    if (this.simulacion) {
      this.simulacion.stop();
    }

    const anteriores: { [id: string]: NodoVista } = {};
    for (const punto of this.puntos()) {
      anteriores[punto.id] = punto;
    }

    const nodos: NodoVista[] = [];
    for (const nodo of this.grafo.nodes) {
      const vista: NodoVista = { id: nodo.id, tipo: nodo.tipo, nombre: nodo.nombre, edad: nodo.edad };
      const previo = anteriores[nodo.id];
      if (previo) {
        vista.x = previo.x;
        vista.y = previo.y;
      }
      nodos.push(vista);
    }

    const enlaces: EnlaceVista[] = [];
    for (const nodo of this.grafo.nodes) {
      for (const vecino of this.grafo.adjList[nodo.id]) {
        if (nodo.id < vecino) {
          enlaces.push({ source: nodo.id, target: vecino });
        }
      }
    }

    const componente = this;
    this.simulacion = d3
      .forceSimulation<NodoVista>(nodos)
      .force('enlaces', d3.forceLink<NodoVista, EnlaceVista>(enlaces).id(function (d) { return d.id; }).distance(90))
      .force('carga', d3.forceManyBody().strength(-250))
      .force('centro', d3.forceCenter(300, 200))
      .on('tick', function () {
        componente.actualizar(nodos, enlaces);
      });
  }

  private actualizar(nodos: NodoVista[], enlaces: EnlaceVista[]) {
    const lineas: Linea[] = [];
    for (const enlace of enlaces) {
      const a = enlace.source as NodoVista;
      const b = enlace.target as NodoVista;
      lineas.push({ x1: a.x ?? 0, y1: a.y ?? 0, x2: b.x ?? 0, y2: b.y ?? 0 });
    }
    this.lineas.set(lineas);
    this.puntos.set(nodos.slice());
  }
}
