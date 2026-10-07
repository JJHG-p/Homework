import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ArbolPage } from './arbol-page/arbol-page';
import { MenuPage } from './menu-page/menu-page';
import { authGuardGuard } from './auth-guard-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'arbol', component: ArbolPage, canActivate: [authGuardGuard] },
    { path: 'menu', component: MenuPage, canActivate: [authGuardGuard] },
];
