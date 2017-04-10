import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private contact: [Contact];
  private contacts: Contact[];
  private key = 'contacts';

  constructor() {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen', 'Skinnarilantie 1', 'Lappeenranta')
    ]
  }

  findContacts(): Contact[] {
    return this.contacts;
  }
  addContact(newContact: Contact) {
    if (newContact) {
        this.contacts.push(newContact);
    }
  }
  contactsToLocalStorage(contacts){
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }
  contactFromLocalStorage() {
    this.contacts = JSON.parse(localStorage.getItem(this.key));
  }
}
