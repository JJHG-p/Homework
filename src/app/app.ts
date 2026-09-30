import { Component } from '@angular/core';
import { Nodo } from './nodo';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'app-root',
  imports: [MenuItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  seleccionado = { titulo: null as string | null };
  menu: Nodo[] = [];

  constructor() {

    const perfil = new Nodo({ title: 'profile', link: '/profile', Component: 'ProfileComponent' });
    const mensajes = new Nodo({ title: 'Messages', link: '/messages', component: 'MessagesComponent' });
    const logout = new Nodo({ title: 'Logout', link: '/logout', component: 'LogoutComponent' });

    const settings = new Nodo({ title: 'Settings', link: '/settings', component: 'SettingsComponent' });
    settings.agregarHijo(new Nodo({ title: 'Account', link: '/settings/account', component: 'AccountComponent' }));
    settings.agregarHijo(new Nodo({ title: 'Profile', link: '/settings/profile', component: 'ProfileSettingsComponent' }));
    settings.agregarHijo(new Nodo({ title: 'Security & Privacy', link: '/settings/security', component: 'SecurityComponent' }));
    settings.agregarHijo(new Nodo({ title: 'Password', link: '/settings/password', component: 'PasswordComponent' }));
    settings.agregarHijo(new Nodo({ title: 'Notification', link: '/settings/notification', component: 'NotificationComponent' }));

    const help = new Nodo({ title: 'Help', link: '/help', component: 'HelpComponent' });
    help.agregarHijo(new Nodo({ title: "FAQ's", link: '/help/faqs', component: 'FaqsComponent' }));
    help.agregarHijo(new Nodo({ title: 'Submit a Ticket', link: '/help/ticket', component: 'TicketComponent' }));
    help.agregarHijo(new Nodo({ title: 'Network Status', link: '/help/status', component: 'StatusComponent' }));

    this.menu = [perfil, mensajes, settings, help, logout];
  }
}
