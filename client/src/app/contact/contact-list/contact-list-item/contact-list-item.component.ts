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
 @Output() remove:EventEmitter<Contact> = new EventEmitter();
 @Output() showOnMap: EventEmitter<Contact> = new EventEmitter();

  constructor() {

  }


  ngOnInit() {
  }
  deleteItem() {
    console.log("delete");
    this.remove.emit(this.contact);

  }
  editItem() {
    console.log("edit");
    this.edit.emit(this.contact);

  }
  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }
}
