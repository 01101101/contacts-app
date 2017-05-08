import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";
import {ContactLocalStorageService} from "./contact-local-storage.service";

@Injectable()
export class ContactService {

  private contact: Contact;
  private contacts: Contact[];
  private highestID: number;
  contactStorage: ContactStorage;


  constructor(private contactApiService: ContactApiService, private contactLocalStorageService: ContactLocalStorageService) {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ]
    this.contactStorage = environment.endpointUrl ? contactApiService : contactLocalStorageService;
    console.log(environment);
  }
  findAllContacts(): Contact[]{
    return this.contacts;
  }
  findAllContactsFromHttp() {
    return this.contactApiService.findAllContacts();
  }

  saveContact(contact: Contact)  {
    console.log("contact.service, " + contact.id)

    if (contact.id) {
      for (let i = 0;i<this.contacts.length;i++) {
        if(contact.id == this.contacts[i].id){
          contact = this.contacts[i];
        }
      }
    }else {
      for (let k = 0; k<this.contacts.length;k++) {
        if (this.highestID <= this.contacts[k].id) {}
        this.highestID = this.contacts[k].id;
      }
      contact.id = this.highestID + 1;
      this.contacts.push(contact);
    }
    //this.contactLocalStorageService.contactsToLocalStorage(this.contacts);
    return this.contacts;
  }

  deleteContact (id: number){
    console.log("contact.service.deleteContact," + id);
    for (let i = 0;i<this.contacts.length;i++) {
      if (id == this.contacts[i].id){
        this.contacts.splice(i, 1)

      }

    }
  }
  showContactOnMap () {

  }
}
