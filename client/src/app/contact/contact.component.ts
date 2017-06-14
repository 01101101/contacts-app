import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  contacts: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.reloadContacts();

  }

  addContact() {
    this.openDialog();
  }

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log("contact.component: reloadContacts");
    });
  }

  editContact(contact: Contact) {
    this.openDialog(contact);
    //this.dialogService.contactDialog(contact);
  }

  deleteContact(contact: Contact) {
    console.log("contact.component.deleteContact");

    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());
  }

  openDialog(contact?: Contact) {

    if (contact) {
      console.log("contact.component.openDialog EDIT: ");
      this.dialogService.updateContactDialog(contact).subscribe(contact => {
        if (contact) {
          this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
        }
      });
    } else {
      console.log("contact.component.openDialog CREATE")
      this.dialogService.createContactDialog().subscribe(contact => {
        this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
      });

    }

  }


}
