using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Models;

namespace ContactsApp.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;
        }
        
        public List<Contact> GetAll()
        {
            return _context.Contact.ToList();
        }

        public Contact GetById(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            return contact;
        }

        public void Create(Contact contact)
        {
            _context.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contact.Update(contact);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);

            if (contact != null)
            {
                _context.Remove(contact);
                _context.SaveChanges();
            }
            else
            {
                Debug.WriteLine("ContactRepository.Delete: " + id);
            }
          
        }
    }
}
