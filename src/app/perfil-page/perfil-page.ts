import { Component, inject, signal } from '@angular/core';
import { Supabase } from '../services/supabase';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.html',
  styleUrl: './perfil-page.scss',
})
export class PerfilPage {
  private sb = inject(Supabase).client;
  url = signal<string>('');

  async subir(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const { data: { user } } = await this.sb.auth.getUser();
    if (!user) return;

    const ruta = `${user.id}/${Date.now()}-${file.name}`;

    const { error } = await this.sb.storage
      .from('avatars')
      .upload(ruta, file, { upsert: true });

    if (error) {
      alert(error.message);
      return;
    }

    this.url.set(this.sb.storage.from('avatars').getPublicUrl(ruta).data.publicUrl);
  }
}
