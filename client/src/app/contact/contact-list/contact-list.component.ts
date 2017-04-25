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

  contact: Contact;
  @Input() contacts: Contact[];
  @Output() editRequest: EventEmitter<Contact>;
  @Output() deleteRequest: EventEmitter<Contact>;
  @Output() showContactOnMap: EventEmitter<Contact>;



  constructor(private contactService: ContactService, private dialogService: DialogService) {
    this.editRequest = new EventEmitter();
    this.deleteRequest = new EventEmitter();
  }

  ngOnInit() {

  }

  reloadContactsFromLocalStorage () {

  }
  reloadContactsFromHttp () {
    this.contactService.findAllContactsFromHttp().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  openDialog() {
    if (this.contact){
      this.dialogService.contactDialog(this.contact);
    }else {
      this.dialogService.contactDialog(this.contact = new Contact());
    }

  }
 deleteContact(){
    this.deleteRequest.emit(this.contact);

  }
  editContact() {
   this.editRequest.emit(this.contact);
  }

}
