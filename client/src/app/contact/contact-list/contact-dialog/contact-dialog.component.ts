import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Contact} from "../../contact";
import {MdDialogRef, MdDialog} from "@angular/material";
import {ContactService} from "../../services/contact.service";


@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})

export class ContactDialogComponent implements OnInit {

  contact: Contact;
  dialogRef;


  constructor(dialogRef: MdDialogRef<ContactDialogComponent>, private contactService: ContactService) {
    this.dialogRef = dialogRef;
  }

  add() {
    this.dialogRef.close(this.contact);
    this.contactService.saveContact(this.contact);
  }

  ngOnInit() {
  }

}
