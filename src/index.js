const AddressBook = require('./service/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();
try{
// Create contacts
const contact1 = new Contact("Shristy", "Mishra", "Ratnagiri", "Bhopal", "Madhya", "123456", "9876543210", "shriimishra@gmail.com");

console.log(addressBook.addContact(contact1)); 

const contact2 = new Contact("Arjun", "Singh", "Anand", "Bhopal", "Madhya Pradesh", "789101", "8765432109", "arjun@email.com");
console.log(addressBook.addContact(contact2));
console.log("All Contacts Before editing", addressBook.getAllContacts());
console.log(addressBook.editContact("Arjun", { address: "Amsterdam", city: "London", phone: "9234567890" }));
console.log("All Contacts After editing", addressBook.getAllContacts());

console.log(addressBook.deleteContact("Shristy"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());

console.log("All Contacts:", addressBook.getAllContacts());

console.log("Search Result:", addressBook.searchContact("Arjun"));
}catch(error){
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "abc", "def", "ghi", "In", "mp", "1001", "12345", "shristy-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}

