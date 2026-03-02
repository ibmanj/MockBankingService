const { v4: uuidv4 } = require('uuid');
const Customer = require('../models/Customer');
const Account = require('../models/Account');
const Card = require('../models/Card');

class MockDataService {
  constructor() {
    this.customers = [];
    this.accounts = [];
    this.cards = [];
    this.initializeMockData();
  }

  initializeMockData() {
    // Create mock customers
    const customer1 = new Customer(
      uuidv4(),
      'John',
      'Doe',
      'john.doe@email.com',
      '+971501234567',
      '1985-03-15',
      { street: '123 Main St', city: 'Dubai', country: 'UAE', postalCode: '12345' }
    );

    const customer2 = new Customer(
      uuidv4(),
      'Jane',
      'Smith',
      'jane.smith@email.com',
      '+971509876543',
      '1990-07-22',
      { street: '456 Oak Ave', city: 'Abu Dhabi', country: 'UAE', postalCode: '54321' }
    );

    const customer3 = new Customer(
      uuidv4(),
      'Ahmed',
      'Al-Mansoori',
      'ahmed.mansoori@email.com',
      '+971505551234',
      '1988-11-10',
      { street: '789 Palm Rd', city: 'Dubai', country: 'UAE', postalCode: '67890' }
    );

    // Create accounts for customers
    const account1 = new Account(
      uuidv4(),
      customer1.id,
      'ACC1001234567',
      'SAVINGS',
      25000.50,
      'AED',
      'ACTIVE',
      '2020-01-15'
    );

    const account2 = new Account(
      uuidv4(),
      customer1.id,
      'ACC1001234568',
      'CHECKING',
      5000.00,
      'AED',
      'ACTIVE',
      '2020-01-15'
    );

    const account3 = new Account(
      uuidv4(),
      customer2.id,
      'ACC2001234569',
      'SAVINGS',
      50000.75,
      'AED',
      'ACTIVE',
      '2019-06-20'
    );

    const account4 = new Account(
      uuidv4(),
      customer3.id,
      'ACC3001234570',
      'CHECKING',
      15000.00,
      'AED',
      'ACTIVE',
      '2021-03-10'
    );

    const account5 = new Account(
      uuidv4(),
      customer3.id,
      'ACC3001234571',
      'FIXED_DEPOSIT',
      100000.00,
      'AED',
      'ACTIVE',
      '2021-03-10'
    );

    // Create cards for customers
    const card1 = new Card(
      uuidv4(),
      customer1.id,
      account1.id,
      '4532-1234-5678-9010',
      'DEBIT',
      'JOHN DOE',
      '2027-12-31',
      '123',
      'ACTIVE',
      '2020-01-20'
    );

    const card2 = new Card(
      uuidv4(),
      customer1.id,
      account2.id,
      '5412-7534-8901-2345',
      'CREDIT',
      'JOHN DOE',
      '2028-06-30',
      '456',
      'ACTIVE',
      '2020-02-01'
    );

    const card3 = new Card(
      uuidv4(),
      customer2.id,
      account3.id,
      '4916-3456-7890-1234',
      'DEBIT',
      'JANE SMITH',
      '2027-09-30',
      '789',
      'ACTIVE',
      '2019-06-25'
    );

    const card4 = new Card(
      uuidv4(),
      customer3.id,
      account4.id,
      '4024-0071-2345-6789',
      'DEBIT',
      'AHMED AL-MANSOORI',
      '2028-03-31',
      '321',
      'ACTIVE',
      '2021-03-15'
    );

    const card5 = new Card(
      uuidv4(),
      customer3.id,
      account4.id,
      '3714-496353-98431',
      'CREDIT',
      'AHMED AL-MANSOORI',
      '2029-01-31',
      '654',
      'ACTIVE',
      '2021-04-01'
    );

    // Link accounts and cards to customers
    customer1.addAccount(account1);
    customer1.addAccount(account2);
    customer1.addCard(card1);
    customer1.addCard(card2);

    customer2.addAccount(account3);
    customer2.addCard(card3);

    customer3.addAccount(account4);
    customer3.addAccount(account5);
    customer3.addCard(card4);
    customer3.addCard(card5);

    // Store in arrays
    this.customers.push(customer1, customer2, customer3);
    this.accounts.push(account1, account2, account3, account4, account5);
    this.cards.push(card1, card2, card3, card4, card5);
  }

  getAllCustomers() {
    return this.customers.map(c => c.toJSON());
  }

  getCustomerById(id) {
    const customer = this.customers.find(c => c.id === id);
    return customer ? customer.toJSON() : null;
  }

  getCustomersByName(firstName, lastName) {
    let filtered = this.customers;
    
    if (firstName) {
      filtered = filtered.filter(c => 
        c.firstName.toLowerCase().includes(firstName.toLowerCase())
      );
    }
    
    if (lastName) {
      filtered = filtered.filter(c => 
        c.lastName.toLowerCase().includes(lastName.toLowerCase())
      );
    }
    
    return filtered.map(c => c.toJSON());
  }

  getAccountsByCustomerId(customerId) {
    return this.accounts
      .filter(a => a.customerId === customerId)
      .map(a => a.toJSON());
  }

  getCardsByCustomerId(customerId) {
    return this.cards
      .filter(c => c.customerId === customerId)
      .map(c => c.toJSON());
  }

  getAllAccounts() {
    return this.accounts.map(a => a.toJSON());
  }

  getAllCards() {
    return this.cards.map(c => c.toJSON());
  }

  getAccountById(id) {
    const account = this.accounts.find(a => a.id === id);
    return account ? account.toJSON() : null;
  }

  getCardById(id) {
    const card = this.cards.find(c => c.id === id);
    return card ? card.toJSON() : null;
  }
}

module.exports = new MockDataService();

// Made with Bob
