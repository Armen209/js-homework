function Account(accountHolder, accountNumber) {
  this.accountHolder = accountHolder;
  this.accountNumber = accountNumber;
  this.balance = 0;
  // let balance = 0;
}

Account.prototype.deposit = function (amount) {
  if (amount < 0) {
    console.log('Deposit must be positive.');
  } else {
    this.balance += amount;
    console.log(
      `Account: ${this.accountHolder}, Depositied: $${amount}. New balance: $${this.balance}`,
    );
  }
};
Account.prototype.withdraw = function (amount) {
  if (amount < 0 || amount > this.balance) {
    console.log('Insufficient funds or invalid amount.');
  } else {
    this.balance -= amount;
    console.log(`Withdraw: $${amount}. New balance: $${this.balance}`);
  }
};
Account.prototype.getBalance = function () {
  return this.balance;
};

const account1 = new Account('Jane Smith', '123445');
const account2 = new Account('Jane Smith', '123445');
const account3 = new Account('Jane Smith', '123445');
const account4 = new Account('Jane Smith', '123445');
const account5 = new Account('Jane Smith', '123445');

console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);

account1.deposit(55);
account1.withdraw(10);