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
  editContact() {}

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id);
  }
  openDialog() {
    if (this.contact){
      this.dialogService.contactDialog(this.contact);
    }else {
      this.dialogService.contactDialog(this.contact = new Contact());
    }

  }

}
