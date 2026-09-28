import { Component, signal } from '@angular/core';
import * as d3 from 'd3';
import { ArbolBinario } from './arbolBinario';
import { Nodo } from './nodo';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  arbol = new ArbolBinario();
  resultadoBusqueda = signal('');

  constructor() {
    const numeros = [30, 50, 20, 70, 40, 60, 35, 80, 45];
    numeros.forEach(numero => {
      this.arbol.insertar(numero);
    });

    console.log('Preorden: ');
    this.arbol.preorden(this.arbol.raiz);
    console.log('Inorden: ');
    this.arbol.inorden(this.arbol.raiz);
    console.log('Postorden: ');
    this.arbol.postorden(this.arbol.raiz);
  }

  buscarNumero = (texto: string) => {
    if (!texto) return;
    const numero = Number(texto);
    const existe = this.arbol.buscar(numero);

    this.resultadoBusqueda.set(
      existe ? `El ${numero} sí está en el árbol` : `El ${numero} no está en el árbol`
    );
  }

  convertirParaD3(nodo: Nodo | null): any {
    if (!nodo) return null;

    const hijos: any[] = [];
    const izquierdo = this.convertirParaD3(nodo.izquierda);
    const derecho = this.convertirParaD3(nodo.derecha);

    if (izquierdo) hijos.push(izquierdo);
    if (derecho) hijos.push(derecho);

    return { valor: nodo.valor, children: hijos };
  }

  dibujarArbol = () => {
    const datos = this.convertirParaD3(this.arbol.raiz);
    if (!datos) return;

    const ancho = 600;
    const alto = 400;

    const contenedor = d3.select('#arbol');
    contenedor.selectAll('*').remove();

    const svg = contenedor
      .append('svg')
      .attr('width', ancho)
      .attr('height', alto);

    const grupo = svg.append('g').attr('transform', 'translate(30, 40)');

    const jerarquia = d3.hierarchy<any>(datos);
    const layout = d3.tree<any>().size([ancho - 60, alto - 80]);
    const arbolConPosiciones = layout(jerarquia);

    grupo
      .selectAll('line')
      .data(arbolConPosiciones.links())
      .enter()
      .append('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
      .attr('stroke', '#999999');

    const nodos = grupo
      .selectAll('g')
      .data(arbolConPosiciones.descendants())
      .enter()
      .append('g')
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    nodos
      .append('circle')
      .attr('r', 18)
      .attr('fill', '#4f8cff');

    nodos
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', 'white')
      .text(d => d.data.valor);
  }
}
