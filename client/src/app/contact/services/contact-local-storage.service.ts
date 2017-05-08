import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import {Contact} from "../contact";
import {ContactStorage} from "./contact-storage";

@Injectable()
export class ContactLocalStorageService implements ContactStorage {

  private localStorageKey = 'contacts';
  private contacts: Contact[];

  constructor() {
    this.initializeLocalStorage();
  }

  saveContact(contact: Contact){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }
  findAllContacts() {
    return this.contacts = JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  initializeLocalStorage() {
    if(!localStorage.getItem(this.localStorageKey)) {

    }
  }
}
