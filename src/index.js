const AddressBook = require('./service/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

// Create contacts
const contact1 = new Contact("Shristy", "Mishra", "Ratnagiri", "Bhopal", "M.P.", "123456", "9876543210", "shriimishra@gmail.com");
const contact2 = new Contact("Arjun", "Singh", "ABc", "Bhopal", "M.P", "789101", "8765432109", "arjun@email.com");

console.log(addressBook.addContact(contact1)); 
console.log(addressBook.addContact(contact2));

console.log("All Contacts:", addressBook.getAllContacts());

console.log("Search Result:", addressBook.searchContact("Arjun"));

