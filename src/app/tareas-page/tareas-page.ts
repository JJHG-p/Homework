import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Supabase } from '../services/supabase';
import { Tareas } from '../services/tareas';

@Component({
  selector: 'app-tareas-page',
  imports: [FormsModule],
  templateUrl: './tareas-page.html',
  styleUrl: './tareas-page.scss',
})
export class TareasPage implements OnInit, OnDestroy {
  protected srv = inject(Tareas);
  private sb = inject(Supabase).client;
  private canal: any;

  tareas = signal<any[]>([]);
  nueva = signal<string>('');

  async ngOnInit() {
    await this.cargar();
    this.canal = this.srv.escuchar(() => this.cargar());
  }

  async cargar() {
    const { data } = await this.srv.listar();
    this.tareas.set(data ?? []);
  }

  async agregar() {
    if (!this.nueva().trim()) return;
    await this.srv.crear(this.nueva());
    this.nueva.set('');
  }

  async completar(id: number, valor:boolean) {
    await this.srv.completar(id, valor);
    await this.cargar();
  }

  async borrar(id: number){
    await this.srv.borrar(id);
    await this.cargar();
  }

  ngOnDestroy() {
    if (this.canal) {
      this.sb.removeChannel(this.canal);
    }
  }
}
