const Contact = require('../model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            return "Invalid contact object!";
        } if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Duplicate Contact! Phone number or Email already exists.");
        }
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts.length > 0 ? this.contacts : "No contacts available.";
    }

    searchContact(name) {
        const results = this.contacts.filter(contact =>
            contact.firstName.toLowerCase().includes(name.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(name.toLowerCase())
        );
        return results.length > 0 ? results : "No matching contacts found.";
    }

}

module.exports = AddressBook;
