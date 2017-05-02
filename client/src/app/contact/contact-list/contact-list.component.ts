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


  @Input() contacts: Contact[];
  @Output() editRequest: EventEmitter<Contact> = new EventEmitter();
  @Output() deleteRequest: EventEmitter<Contact> = new EventEmitter();
  @Output() showContactOnMap: EventEmitter<Contact> = new EventEmitter();



  constructor(private contactService: ContactService, private dialogService: DialogService) {

  }

  contactEdit (contact: Contact) {
    this.editRequest.emit(contact);
  }
  contactDelete (contact: Contact) {
    console.log("contact-list.component delete" + contact.lastName);
    this.deleteRequest.emit(contact);
  }
  contactShowOnMap (contact: Contact) {
    this.showContactOnMap.emit(contact);
  }

  ngOnInit() {

  }





}
