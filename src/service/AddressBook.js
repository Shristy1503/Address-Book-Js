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

    editContact(name, updatedDetails) {
        const contactIndex = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === name.toLowerCase()
        );

        if (contactIndex === -1) {
           return ("Contact not found!");
        }

        Object.keys(updatedDetails).forEach(key => {
            if (updatedDetails[key]) {
                this.contacts[contactIndex][key] = updatedDetails[key];
            }
        });

        return "Contact updated successfully!";
    }
    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName.toLowerCase() === name.toLowerCase());
        if (index === -1) {
            throw new Error("Contact not found!");
        }
        this.contacts.splice(index, 1);
        return "Contact deleted successfully!";
    }
    countContacts() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

}

module.exports = AddressBook;
