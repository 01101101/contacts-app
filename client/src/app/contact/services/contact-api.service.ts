import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from '../../../environments/environment';
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";



@Injectable()
export class ContactApiService implements ContactStorage {

  url = environment.endpointUrl + '/contacts';

  constructor(private http: Http) {
  }

  findAllContacts(): Observable<Contact[]> {

    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  findContactById() {
    //TODO
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact) {

    console.log("contact-api-service-saveContact: ");
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact) {
    console.log("contact-api-service-createContact: ");
    return this.http
      .post(this.url, contact);
  }

  updateContact(contact: Contact) {
    return this.http
      .put(this.url + '' + contact.id, contact);
  }

  deleteContact(contact: Contact) {
    console.log("contact-api-service-delete:");
    return this.http.delete((this.url + "/" + contact.id));
  }
}
