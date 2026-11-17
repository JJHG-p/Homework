import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Giphy } from './giphy'; 

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly giphy = inject(Giphy);
  protected readonly texto = signal('');
  protected readonly buscado = signal(false);

  private temporizador: number | undefined;

  actualizarTexto(valor: string) {
    this.texto.set(valor);

    window.clearTimeout(this.temporizador);

    const Componente = this;
    this.temporizador = window.setTimeout(function () {
      Componente.buscar();
    }, 400);
  }

  async buscar() {
    window.clearTimeout(this.temporizador);
    await this.giphy.buscar(this.texto());
    this.buscado.set(this.texto().trim().length >= 2);
  }
}
