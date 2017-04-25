import { Injectable } from '@angular/core';

import {Contact} from "../contact";

@Injectable()
export class ContactLocalStorageService {

  private key = 'contacts';
  private contacts: Contact[];

  constructor() { }

  contactsToLocalStorage(contacts){
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }
  contactFromLocalStorage() {
    this.contacts = JSON.parse(localStorage.getItem(this.key));
  }
}
