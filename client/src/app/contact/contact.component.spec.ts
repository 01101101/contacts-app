import {ContactComponent} from './contact.component';
import {Contact} from "./contact";


describe('ContactComponent', () => {
  let contactComponent: ContactComponent;

  it('should return all contacts', () => {
    spyOn(contactComponent, 'ngOnInit');
  });

});
