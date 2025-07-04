class Account {
  #balance 
  constructor(accountHolder, accountNumber,balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  deposit(amount) {
    if(amount <= 0){
        console.log("Amount must be positive ")
    } else {
        this.#balance += amount;
        console.log(
          `Account: ${this.accountHolder}, Depositied: $${amount}. New balance: $${this.getBalance()}`,
        );
    }
  }
  withdraw(amount) {
    if(amount <= 0){
        console.log("You cant withdraw negative or 0 amount of money")
    } else if(amount > this.#balance){
        console.log(`There is no $${amount} on your account`) 
    } else {
        this.#balance -= amount;
        console.log(
         `Account: ${this.accountHolder}, Withdrawed: $${amount}. New balance: $${this.#balance}`,
        )
    }
  }
  getBalance() {
    return this.#balance
  }
}

class Bank{
   constructor(accounts){
        this.accounts = [];
   }

   addAccount(account){
    if(account){
        this.accounts.push(account)
    } else {
        console.log("Invalid Account")
    }
   }

   findAccount(accountNumber){
        for(let i=0;i<this.accounts.length;++i){
            if(this.accounts[i].accountNumber == accountNumber){
                return this.accounts[i]
            }
        }
      }

    getTotalBalance(){
        let totalBalance = 0
        for(let i =0;i<this.accounts.length;++i){
            totalBalance+= this.accounts[i].getBalance()
        } 
        return totalBalance
    }
}

let account1 = new Account("Nate Diaz","123456")
let account2 = new Account("Nick Diaz","345677")
let account3 = new Account("John Jones","56784")

account1.deposit(2300)
account2.deposit(4500)

const acba = new Bank()
acba.addAccount(account1)
acba.addAccount(account2)
acba.addAccount(account3)

console.log(acba.getTotalBalance())

account1.balance = 20000
console.log(account1)

