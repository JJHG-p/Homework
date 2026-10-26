import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  email = signal<string>('');
  clave = signal<string>('');
  msg = signal<string>('');

  async entrar() {
    const { error } = await this.auth.entrar(this.email(), this.clave());
    if (error) {
      this.msg.set(error.message);
    } else {
      this.router.navigate(['/tareas']);
    }
  }

  async registrar() {
    const { data, error } = await this.auth.registrar(this.email(), this.clave());
    if (error) {
      this.msg.set(error.message);
    } else if (data.session) {
      this.router.navigate(['/tareas']);
    } else {
      this.msg.set('Revisa tu correo para confirmar la cuenta');
    }
  }
}
