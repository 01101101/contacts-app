import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../contact";
import {DialogService} from "../../services/dialog.service";


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

 @Input() contact: Contact;
 @Output() edit:EventEmitter<Contact> =  new EventEmitter();
 @Output() delete:EventEmitter<Contact> = new EventEmitter();
 @Output() showOnMap: EventEmitter<Contact> = new EventEmitter();

  constructor() {

  }


  ngOnInit() {
  }
  deleteItem(contact: Contact) {
    console.log("delete" + contact.id + ", " + contact.firstName);
    this.delete.emit(contact);

  }
  editItem(contact: Contact) {
    console.log("edit");
    this.edit.emit(contact);

  }
  showContactOnMap(contact: Contact) {
    this.showOnMap.emit(contact);
  }
}
