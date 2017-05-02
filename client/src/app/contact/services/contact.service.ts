import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";

@Injectable()
export class ContactService {

  private contact: Contact;
  private contacts: Contact[];

  constructor(private contactApiService: ContactApiService) {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ]
  }
  findAllContacts(): Contact[]{
    return this.contacts;
  }
  findAllContactsFromHttp() {
    return this.contactApiService.findContacts();
  }

  saveContact(contact: Contact)  {
    contact.id = this.contacts.length;
    this.contacts.push(contact);
    return this.contacts;
  }

  deleteContact (id: number){
    console.log("contact.service.deleteContact," + id);
    for (let i = 0;i<this.contacts.length;i++) {
      if (id == this.contacts[i].id){
        this.contacts.splice(i, 1)
      }else{console.log("error no id")}

    }
  }
}
