import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";

@Injectable()
export class ContactApiService {

   url = 'http://localhost:60829/api/contacts';

  constructor(private http: Http) { }

  findContacts() {

   /* return this.http.get(url).map(function(response){
      return response.json() as Contact[];
    });*/
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact []);
  }

  saveContact(contact: Contact) {
    /*if (contact.id) {
      this.createContact(contact);
    }else{
      this.updateContact(contact);
    }*/
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }
  createContact(contact: Contact) {
    return this.http
    .post(this.url, contact);}

  updateContact(contact: Contact) {
   return this.http.put(this.url + '' + contact.id, contact);
  }
}
