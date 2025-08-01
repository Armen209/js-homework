
//Task 1: Single Responsibility Principle (SRP)
class User{
    constructor(name,email){
        this.email = email;
        this.name = name;
    }

    getData(){
        return {
            name:this.name,
            email:this.email
        }
    }
}

class UserProfileRender{
    constructor(user){
        this.user = user;
    }

    render(){
        const { name, email } = this.user.getData();

    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${name}</h2>
      <p>${email}</p>
    `;
    document.body.appendChild(div);
    }
}


//Task 2: Open/Closed Principle (OCP)
class PaymentStrategy{
    pay(amount){
        throw new Error("pay() must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy{
    pay(amount){
        return `Paid ${amount} with credit card`;
    }
}

class Crypto extends PaymentStrategy{
    pay(amount){
        return `Paid ${amount} with crypto`;
    }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} with PayPal.`);
  }
}

class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  process(amount) {
    this.paymentMethod.pay(amount);
  }
}

//Task 3: Liskov Substitution Principle (LSP)
class Shape{
    area(){
        throw new Error("area() must be implemented");
    }
}

class Rectangle extends Shape{
    constructor(height,width){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.height * this.width;
    }
}

class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }

    area(){
        return Math.pow(this.side,2);
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * Math.pow(this.radius,2);
    }
}

function renderArea(shape){
    console.log("Area is " + shape.area());
}

const rect = new Rectangle(5, 10);
const square = new Square(7);
const circle = new Circle(4);

renderArea(rect);   
renderArea(square); 
renderArea(circle); 

//Task 4: Interface Segregation Principle (ISP)

class Printer {
  print(doc) {
    throw new Error("print() must be implemented");
  }
}

class Scanner {
  scan(doc) {
    throw new Error("scan() must be implemented");
  }
}

class Fax {
  fax(doc) {
    throw new Error("fax() must be implemented");
  }
}
class OldPrinter extends Printer {
  print(doc) {
    console.log("Printing:", doc);
  }
}

//Task 5: Dependency Inversion Principle (DIP)

class MessageService {
  send(message) {
    throw new Error("send() must be implemented.");
  }
}

class EmailService extends MessageService {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class MessageSender {
  constructor(service) {
    this.service = service;
  }

  sendMessage(message) {
    this.service.send(message);
  }
}
