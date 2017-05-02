import { Component } from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import { DialogService } from "./contact/services/dialog.service";
import { ContactDialogComponent } from './contact/contact-list/contact-dialog/contact-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  contact: Contact;


  constructor(private contactService: ContactService, private dialogService: DialogService) {


  }




}
