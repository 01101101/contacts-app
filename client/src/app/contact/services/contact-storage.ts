import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";

export interface ContactStorage {
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
  findAllContacts(): Observable<Contact[]>;
}
