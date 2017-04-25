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
 @Input() edit: EventEmitter<Contact>;
 @Input() delete: EventEmitter<Contact>;
 @Input() showOnMap: EventEmitter<Contact>;

  constructor() { }

  ngOnInit() {
  }
  deleteItem() {
    console.log("delete" + this.contact.id + ", " + this.contact.firstName);
    this.delete.emit(this.contact);
  }
  editItem() {
    console.log("edit");
    this.edit.emit(this.contact);
  }
}
