import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  @Output() add = new EventEmitter<{ name: string; phone: string }>();

  agregar = (name: string, phone: string) => {
    if (!name || !phone) return;
    this.add.emit({ name, phone });
  }
}
