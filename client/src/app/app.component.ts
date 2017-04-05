import { Component } from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  selectedContact: Contact;
  textBox:string;

  constructor(contactService: ContactService) {
    this.contacts = contactService.findContacts();
  }
  contactSelected(contact: Contact) {
    this.selectedContact = contact;
  }
}
