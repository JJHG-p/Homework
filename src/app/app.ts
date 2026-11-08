import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SmartSearch } from './smart-search';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private search = new SmartSearch();

  version = signal<number>(0);
  name = signal<string>('');
  popularity = signal<string>('');
  prefix = signal<string>('');
  k = signal<string>('2');
  message = signal<string>('');

  products = computed(() => {
    this.version();
    const lista = this.search.all();
    lista.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    return lista;
  });

  results = computed(() => {
    this.version();
    return this.search.searchTopK(this.prefix(), Number(this.k()));
  });

  constructor() {
    this.search.insert('air max', 90);
    this.search.insert('air force', 95);
    this.search.insert('air jordan', 85);
    this.search.insert('adidas boost', 80);
    this.search.insert('nike pegasus', 88);
    this.prefix.set('air');
  }

  add() {
    const name = this.name().trim();
    const popularity = Number(this.popularity());

    if (!name || !popularity || popularity <= 0) {
      this.message.set('Escribe un nombre y una popularidad mayor a 0');
      return;
    }

    this.search.insert(name, popularity);
    this.name.set('');
    this.popularity.set('');
    this.message.set('');
    this.version.update(function (v) {
      return v + 1;
    });
  }
}
