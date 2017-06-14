using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using ContactsApp.Models;
using ContactsApp.Repository;

namespace ContactsApp.Services
{
    public class ContactService : IContactService
    {
        //private static List<Contact> _contacts;
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            /*_contacts = new List<Contact>()
            {
                new Contact(1, "Masa", "Masalainen", "12345345", "Skinnarilankatu 1", "City")
            };*/

            _contactRepository = contactRepository;

        }

        public List<Contact> FindAllContacts()
        {
            return _contactRepository.GetAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.GetById(id);
        }

        public void SaveContact(Contact contact)
        {
            _contactRepository.Create(contact);
           
        }

        public void UpdateContact(Contact contact)
        {
            _contactRepository.Update(contact);
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }

    
    }
}
