import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {


  private contacts: Contact[];
  private key = 'contacts';

  constructor() {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ]
  }

  findContacts(): Contact[] {
    return this.contacts;
  }

  contactsToLocalStorage(contacts){
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }
  contactFromLocalStorage() {
    this.contacts = JSON.parse(localStorage.getItem(this.key));
  }

  onSubmit() {}
}
