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

  constructor(private dialogRef: MdDialogRef<ContactDialogComponent>) {

  }
  ngOnInit() {
  }

  add() {
    this.dialogRef.close(this.contact);
    console.log("contact.dialog.add: ");
  }



}
