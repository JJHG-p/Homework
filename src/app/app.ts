import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loader } from './loader/loader';
import { ContactList } from './contact-list/contact-list';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, ContactList, ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contacts: { name: string; phone: string }[] = [];
  isLoading = true;

  constructor(){
    this.cargarContactos();
  }

  cargarContactos = async () => {
    this.isLoading = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.contacts = [
        { name: "Juan Hinestroza", phone: "3125698448"},
        { name: "Juan Camilo", phone: "3108459669"}
      ];
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  }

  agregarContacto = (contacto: { name: string; phone: string}) => {
    this.contacts.push(contacto);
  }

  eliminarContacto = (contactoAEliminar: {name: string; phone: string}) => {
    this.contacts = this.contacts.filter(c => c !== contactoAEliminar);
  }
}
