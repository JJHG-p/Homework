import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
    path: 'explorador',
    canActivate: [authGuard],
    loadComponent: () => import('./explorador/explorador').then(m => m.Explorador)
    },
    { path: '**', component: NoEncontrado }
];
