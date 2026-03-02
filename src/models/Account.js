class Account {
  constructor(id, customerId, accountNumber, accountType, balance, currency, status, openDate) {
    this.id = id;
    this.customerId = customerId;
    this.accountNumber = accountNumber;
    this.accountType = accountType; // SAVINGS, CHECKING, FIXED_DEPOSIT
    this.balance = balance;
    this.currency = currency;
    this.status = status; // ACTIVE, INACTIVE, CLOSED
    this.openDate = openDate;
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      accountNumber: this.accountNumber,
      accountType: this.accountType,
      balance: this.balance,
      currency: this.currency,
      status: this.status,
      openDate: this.openDate
    };
  }
}

module.exports = Account;

// Made with Bob
