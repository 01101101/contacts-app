import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {environment} from '../../../environments/environment';
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactApiService implements ContactStorage {

  url = environment.endpointUrl + '/contacts';

  constructor(private http: Http) {
  }

  findAllContacts(): Observable<Contact[]> {

    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  /* findContactById(id): Observable<Contact>{

   return this.http
   .get(this.url)
   .map(response => response.json() as Contact);

   }*/

  saveContact(contact: Contact) {

    console.log("contact-api-service-saveContact: " + contact.firstName);
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact) {
    //console.log("contact-api-service-createContact: " + contact.firstName);
/*
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
*/

     return this.http.post(this.url, contact);
      //  .map(this.extractData)
      // .catch(this.handleError);

    /*  return this.http
      .post(this.url, contact)

      .do(data => console.log(data));*/
  }

  private extractData(res: Response) {
   let body = res.json();
   return body.data || {};
   }

  updateContact(contact: Contact) {
    console.log("contact-api-service-updateContact: " + contact.firstName);
    return this.http
      .put(this.url + '/' + contact.id, contact)
      .do(data => console.log(data));
  }

  deleteContact(contact: Contact){
    console.log("contact-api-service-delete:");


    return this.http.delete(this.url + '/' + contact.id)
     // .map(r => r.json() as Contact)
      //.do(data => console.log(data));
  }


   private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
