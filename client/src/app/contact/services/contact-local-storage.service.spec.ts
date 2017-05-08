import {inject, TestBed} from '@angular/core/testing';
import * as _ from 'lodash';

import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from "../contact";



describe('ContactLocalStorageService', () => {

  let localStorageKey = 'contacts';

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
    })

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    })

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
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findAllContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function(c) {
        expect(contactIds).toContain(c.id);
      })
    })
  }));
});
