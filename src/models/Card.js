class Card {
  constructor(id, customerId, accountId, cardNumber, cardType, cardholderName, expiryDate, cvv, status, issueDate) {
    this.id = id;
    this.customerId = customerId;
    this.accountId = accountId;
    this.cardNumber = cardNumber;
    this.cardType = cardType; // DEBIT, CREDIT, PREPAID
    this.cardholderName = cardholderName;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.status = status; // ACTIVE, BLOCKED, EXPIRED
    this.issueDate = issueDate;
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      accountId: this.accountId,
      cardNumber: this.cardNumber,
      cardType: this.cardType,
      cardholderName: this.cardholderName,
      expiryDate: this.expiryDate,
      cvv: this.cvv,
      status: this.status,
      issueDate: this.issueDate
    };
  }
}

module.exports = Card;

// Made with Bob
