import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from "@angular/material";
import  { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {ContactService} from "./contact/services/contact.service";
import { DialogService } from "./contact/services/dialog.service";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";
import {ContactListItemComponent} from "./contact/contact-list/contact-list-item/contact-list-item.component";
import { ContactDialogComponent } from './contact/contact-list/contact-dialog/contact-dialog.component';
import { ContactApiService} from './contact/services/contact-api.service';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';
//import {ContactLocalStorageService } from './contact/services/contact-local-storage.service';

const routes = [
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full'
  },
  {
    path: 'app-contact',
    component: ContactComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    ContactComponent,
    LoginComponent,
    MapDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  providers: [ContactService, DialogService, ContactApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
