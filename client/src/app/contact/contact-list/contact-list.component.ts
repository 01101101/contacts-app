import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../services/contact.service";



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() select: EventEmitter<Contact>;
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showContactOnMap: EventEmitter<Contact>;

  newContact: Contact;



  constructor() {
    this.select = new EventEmitter();
    this.newContact = new Contact(3,"", "", "", "", "");
  }

  ngOnInit() {
  }

  contactSelected(contact: Contact) {
    this.select.emit(contact);
  }
 addContact() {
    if (this.newContact) {

      this.contacts.push(new Contact(this.newContact.id, this.newContact.firstName,
        this.newContact.lastName,this.newContact.phone, this.newContact.streetAddress, this.newContact.city));
    }
  }

}
