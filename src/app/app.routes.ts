import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Tareas } from './tareas/tareas';
import { ArbolPage } from './arbol-page/arbol-page';
import { MenuPage } from './menu-page/menu-page';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'tareas', component: Tareas, canActivate: [authGuard] },
    { path: 'arbol', component: ArbolPage, canActivate: [authGuard] },
    { path: 'menu', component: MenuPage, canActivate: [authGuard] },
];
