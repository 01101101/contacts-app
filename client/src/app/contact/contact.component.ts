import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  contacts: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService) { }

  ngOnInit() {
    this.reloadContacts();
  }
  reloadContacts (){
    this.contacts = this.contactService.findAllContacts();
  }
  editContact(contact: Contact) {
    this.dialogService.contactDialog(contact);
  }

  deleteContact(contact: Contact) {
    console.log("contact.component.deleteContact" + contact.id);

    this.contactService.deleteContact(contact.id);
  }
  openDialog() {
    if (this.contact){
      this.editContact(this.contact);
    }else {
      this.dialogService.contactDialog(new Contact());
    }

  }
  reloadContactsFromLocalStorage () {

  }
  reloadContactsFromHttp () {
    this.contactService.findAllContactsFromHttp().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
