import {Contact} from "../contact";

export interface ContactStorage {
  saveContact(contact: Contact);
  findAllContacts();
}
