import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import {ContactService} from "./contact/services/contact.service";
import { DialogService } from "./contact/services/dialog.service";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";
import {ContactListItemComponent} from "./contact/contact-list/contact-list-item/contact-list-item.component";
import { ContactDialogComponent } from './contact/contact-list/contact-dialog/contact-dialog.component';
import { ContactApiService} from './contact/services/contact-api.service';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  providers: [ContactService, DialogService, ContactApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
