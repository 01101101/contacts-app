import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";

@Injectable()
export class ContactService {


  private contact: Contact;
  private newContact: Contact;
  private contacts: Contact[];
  private key = 'contacts';

  constructor(private contactApiService: ContactApiService) {
    this.contacts = [
      new Contact(0, 'Masa', 'Masalainen','123345678', 'Skinnarilantie 36', 'Lappeenranta'),
      new Contact(1, 'Pena', 'Penalainen','123453622', 'Skinnarilantie 1', 'Lappeenranta')
    ]
    this.newContact = new Contact(this.contacts.length,"testi", "", "", "", "");
  }

  findAllContacts(): Contact[]{
    return this.contacts;
  }
  findAllContactsFromHttp() {
    return this.contactApiService.findContacts();
  }
  blankContact() {
    return this.contact;

  }
  saveContact(contact: Contact)  {
    this.contacts.push(new Contact(contact.id,contact.firstName,
      contact.lastName, contact.phone, contact.streetAddress, contact.city));
    this.newContact = new Contact (this.newContact.id = this.contacts.length, this.newContact.firstName = "etunimi"
      , this.newContact.lastName = "sukunimi ", this.newContact.phone =  "puh nro", this.newContact.streetAddress = "katu os",
      this.newContact.city =  "kaupunni");
  }
    /* if (this.newContact) {

   this.contacts.push(new Contact(this.newContact.id, this.newContact.firstName,
   this.newContact.lastName,this.newContact.phone, this.newContact.streetAddress, this.newContact.city));
   }*/


  contactsToLocalStorage(contacts){
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }
  contactFromLocalStorage() {
    this.contacts = JSON.parse(localStorage.getItem(this.key));
  }
  deleteContact (id : number){

  }


}
