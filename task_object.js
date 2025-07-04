function createAccount(accountHolder, accountNumber) {
  return {
    accountHolder: accountHolder,
    accountNumber: accountNumber,
    balance: 0,

    deposit: function (amount) {
      if (amount < 0) {
        console.log('Deposit must be positive.');
      } else {
        this.balance += amount;
        console.log(
          `Account: ${this.accountHolder}, Depositied: $${amount}. New balance: $${this.balance}`,
        );
      }
    },
    whithdraw: function (amount) {
      if (amount < 0 || amount > this.balance) {
        console.log('Insufficient funds or invalid amount.');
      } else {
        this.balance -= amount;
        console.log(`Withdraw: $${amount}. New balance: $${this.balance}`);
      }
    },

    getBalance: function () {
      return this.balance;
    },
  };
}

function createBank() {
  return {
    accounts: [],

    addAccount: function (account) {
      if (account) {
        this.accounts.push(account);
      }
    },

    findAccount: function (accountNumber) {
      if (accountNumber) {
        // for (let i = 0; i < this.accounts.length; ++i) {
        //   if (this.accounts[i].accountNumber === accountNumber) {
        //     return this.accounts[i];
        //   }
        // }

        // for (const account of this.accounts) {
        //   if (account.accountNumber === accounNumber) {
        //     return account;
        //   }
        // }

        const exist = this.accounts.find(function (account) {
          return account.accountNumber === accountNumber;
        });

        if (exist) {
          return exist;
        }
        console.log('Account does not exist');
      }
    },

    totalAmount: function () {
      let totalAmount = 0;
      // for (let i = 0; i < this.accounts.length; ++i) {
      //   totalAmount += this.accounts[i].balance;
      // }

      // for (const account of this.accounts) {
      //   totalAmount += account.balance;
      // }

      totalAmount = this.accounts.reduce(function (prev, current) {
        return prev + current.balance;
      }, 0);
      return totalAmount;
    },
  };
}

const account1 = createAccount('Jane Smith', '456123');

const account2 = createAccount('Lebron James', '123789');

const account3 = createAccount('Jason Tatum', '789123');

account1.deposit(1000);

account2.deposit(500);

account3.deposit(250);

// account1.whithdraw(300);

// account2.whithdraw(1000);

// account3.whithdraw(400);

const ameria = createBank();

ameria.addAccount(account1);
ameria.addAccount(account2);
ameria.addAccount(account3);

let f = ameria.findAccount('456sd123');
console.log(f);
// let f2 = ameria.findAccount('234235325');

// console.log(ameria.totalAmount());