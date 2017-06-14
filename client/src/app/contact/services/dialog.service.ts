import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Contact} from "../contact";
import {ContactDialogComponent} from "../contact-list/contact-dialog/contact-dialog.component";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DialogService {



  constructor(public dialog: MdDialog) { }


  public contactDialog(contact?: Contact) {
    console.log("dialogService-contactDialog: ");
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
      return dialogRef.afterClosed();
  }

  public createContactDialog(): Observable<Contact> {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = new Contact();
    return dialogRef.afterClosed();

  }

  public updateContactDialog(contact: Contact): Observable<Contact> {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  /*public mapDialog(address: string) {
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.StreetAddress = StreetAddress;
    dialogRef.componentInstance.city = city;
    return dialogRef.afterClosed();
  }*/

}
