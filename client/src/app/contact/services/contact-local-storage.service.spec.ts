import {inject, TestBed} from '@angular/core/testing';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';


import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from "../contact";


describe('ContactLocalStorageService', () => {

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  //Local Storage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    });

  });

  function contactArray() {
    return [
      new Contact(1, 'First', 'LastName', '01234567', 'streetAddress', 'City'),
      new Contact(2, 'Second', 'LastName', '01234567', 'streetAddress', 'City'),
      new Contact(3, 'Third', 'LastName', '01234567', 'streetAddress', 'City')
    ]
  }

  it('Should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findAllContacts Should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let dummyContacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(dummyContacts));
    //let contactIds = _.map(contacts, 'id');
    service.findAllContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toEqual(3);
      _.forEach(contacts, function(c) {
        expect(dummyContacts).toContain(_.create(Contact.prototype, c));
      })
    })
  }));
});
