import { Component, OnInit, Input, EventEmitter } from '@angular/core';
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
 @Input() remove: EventEmitter<Contact>;
 @Input() showOnMap: EventEmitter<Contact>;

  constructor() { }

  ngOnInit() {
  }


}
