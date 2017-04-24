import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../services/contact.service";
import {DialogService} from "../services/dialog.service";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  contacts: Contact[];
  //@Input() contacts: Contact[];
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showContactOnMap: EventEmitter<Contact>;

  newContact: Contact;

  constructor(private contactService: ContactService, private dialogService: DialogService) {
    //this.contacts = contactService.findAllContacts();
  }

  ngOnInit() {
   this.reloadContacts();
  }
  reloadContacts (){
   this.contacts = this.contactService.findAllContacts();
  }
  reloadContactsFromLocalStorage () {

  }
  reloadContactsFromHttp () {
    this.contactService.findAllContactsFromHttp().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  openDialog() {
    this.dialogService.contactDialog();
  }
  delete(contact : Contact) {
    this.contactService;
  }

}
