class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.validateName(firstName, "First Name");
        this.validateName(lastName, "Last Name");
        this.validateAddress(address, "Address");
        this.validateAddress(city, "City");
        this.validateAddress(state, "State");
        this.validateZip(zip);
        this.validatePhone(phone);
        this.validateEmail(email);
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
    }

    validateZip(zip) {
        const zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid Zip Code. It must be a 6-digit number.");
        }
    }

    validatePhone(phone) {
        const phoneRegex = /^[6-9][0-9]{9}$/; 
        if (!phoneRegex.test(phone)) {
            throw new Error("Invalid Phone Number. It must be a 10-digit number starting with 6-9.");
        }
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email Address.");
        }
    }
}

module.exports = Contact;
