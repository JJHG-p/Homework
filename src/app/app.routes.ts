import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TareasPage } from './tareas-page/tareas-page';
import { PerfilPage } from './perfil-page/perfil-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'tareas', component: TareasPage, canActivate: [authGuard] },
    { path: 'perfil', component: PerfilPage, canActivate: [authGuard] }
];
