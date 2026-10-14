import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  email = signal<string>('');
  password = signal<string>('');

  async handleLogin() {
    try {
      await this.auth.entrar(this.email(), this.password());
      this.router.navigate(['/explorador'])
    } catch {
      alert('Correo o contraseña incorrectos');
    }
  }
}
