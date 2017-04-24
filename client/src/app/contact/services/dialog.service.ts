import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";
import {Contact} from "../contact";
import {ContactDialogComponent} from "../contact-list/contact-dialog/contact-dialog.component";

@Injectable()
export class DialogService {



  constructor(public dialog: MdDialog) { }


  public contactDialog(contact?: Contact) {

    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
      return dialogRef.afterClosed();
  }



  /*public mapDialog(address: string) {
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
  }*/

}
