class Customer {
  constructor(id, firstName, lastName, email, phone, dateOfBirth, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.accounts = [];
    this.cards = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  addCard(card) {
    this.cards.push(card);
  }

  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      accounts: this.accounts,
      cards: this.cards
    };
  }
}

module.exports = Customer;

// Made with Bob
