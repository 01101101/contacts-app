import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";
import {ContactLocalStorageService} from "./contact-local-storage.service";

@Injectable()
export class ContactService {

  private contact: Contact;
  public contacts: Contact[];
  private contactStorage: ContactStorage;


  constructor(private contactApiService: ContactApiService, private contactLocalStorageService: ContactLocalStorageService) {
    this.contacts = [
      new Contact(1, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(2, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ];
    this.contactStorage = environment.endpointUrl ? contactApiService : contactLocalStorageService;

  }
  findAllContacts(){
    return this.contactStorage.findAllContacts();
  }


  saveContact(contact: Contact)  {
    console.log("contact.service.saveContact, ");

    return this.contactStorage.saveContact(contact);
  }

  deleteContact (contact: Contact){
    console.log("contact.service.deleteContact,");

   return this.contactStorage.deleteContact(contact);
  }

}
