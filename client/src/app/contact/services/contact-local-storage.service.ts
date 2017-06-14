import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

import {Contact} from "../contact";
import {ContactStorage} from "./contact-storage";
import * as _ from 'lodash';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactLocalStorageService implements ContactStorage {

  private localStorageKey = 'contacts';
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ];
    this.initializeLocalStorage();
  }

  saveContact(contact: Contact): Observable<Contact>{
    let contacts: Contact[] = this.getContactsFromLocalStorage();

    if(!contact.id) {
      let highestId = <Contact>_.maxBy(contacts, 'id');
      contact.id = highestId ? highestId.id + 1 : 1;
      contacts.push(contact);
    }else {

     contacts = _.map(contacts, function (c: Contact) {
       return c.id == contact.id ? contact : c;
     })
    }
    this.saveContactsToLocalStorage(contacts);
    return this.findContactById(contact.id);
  }

  findContactById(id): Observable<Contact> {
    let contacts: Contact[] = this.getContactsFromLocalStorage();
    return Observable.of(_.find(contacts,{'id': id}));
  }

  deleteContact (contact: Contact) {
    let contacts = this.getContactsFromLocalStorage();

    _.remove(contacts, function (c: Contact){
      return _.isEqual(contact.id, c.id);
    });

    this.saveContactsToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  findAllContacts():Observable<Contact[]> {
    return Observable.of(this.getContactsFromLocalStorage());
  }

  getContactsFromLocalStorage() {
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }

  saveContactsToLocalStorage(contacts) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }

  initializeLocalStorage() {
    if(!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    }
  }


}
