//1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
// class Person {
//     constructor(name, age, country) {
//         this.name = name
//         this.age = age
//         this.country = country
//     }
//     details() {
//         console.log(this.name, this.age, this.country);
//     }
// }
// let joe = new Person("joe", 22, "USA")
// let ellen = new Person("ellen", 25, "UK")
// joe.details()
// ellen.details()


//2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     area() {
//         return `area is ${this.height * this.width}`
//     }
//     perimeter() {
//         return `perimeter is ${(this.height + this.width) * 2}`
//     }
// }
// let obj = new Rectangle(20, 15)
// console.log(obj.area())
// console.log(obj.perimeter())


//3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     details() {
//         console.log(this.make, this.model, this.year);
//     }
// }
// class Car extends Vehicle{
//     constructor(make, model, year, doors){
//         super(make, model, year)
//         this.doors=doors
//     }
//     details() {
//         console.log(this.make, this.model, this.year, this.doors);
//     }
// }
// let car1=new Car("edc", "ixs", 2000, 8)
// car1.details()


//4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
// class BankAccount {
//     constructor(number, balance) {
//         this.number = number;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//         return this.balance;
//     }
//     withdraw(amount) {
//         this.balance -= amount;
//         return this.balance;
//     }
// }
// let person = new BankAccount(34, 2000);
// console.log(person.deposit(200));
// console.log(person.withdraw(2100));


//5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
//square a*b, triangle a*b/2, circle PI*r*r
// class Shape {
//     constructor(width, heigth) {
//         this.width = width
//         this.heigth = heigth
//     }
//     area() {
//         return heigth * width
//     }
// }
// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius
//     }
//     area() {
//         return Math.round(Math.PI * this.radius * this.radius);
//     }
// }
// class Triangle extends Shape {
//     constructor(width, heigth) {
//         super(width,heigth);
//     }
//     area() {
//         return this.width * this.width / 2;
//     }
// }
// let circ = new Circle(5)
// let trig = new Triangle(5)
// console.log(circ.area())
// console.log(trig.area())


//6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
// class Employee {
//     constructor(name, salary) {
//         this.name = name
//         this.salary = salary
//     }
//     salaryAnnual() {
//         return this.salary * 12
//     }
// }
// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary)
//         this.department = department
//     }
//     salaryAnnual(bonus) {
//         return this.salary * 12 + bonus
//     }
// }
// let karen = new Manager("karen", 4000)
// let mark = new Manager("mark", 4300)
// console.log(karen.salaryAnnual(200));
// console.log(mark.salaryAnnual(1200));


//7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details
// class Book {
//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }
//     display() {
//         return `${this.title} by ${this.author} on ${this.year}`
//     }
// }
// class Ebook extends Book {
//     constructor(title, author, year, price) {
//         super(title, author, year)
//         this.price = price
//     }
//     display() {
//         return `${this.title} by ${this.author} on ${this.year} for ${this.price}`
//     }
// }
// let ebook = new Ebook("Hunger Games", "Suzanne Collins", 2008, 12.79)
// console.log(ebook.display());


//8. Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.
// class Animal {
//     constructor(species, sound) {
//         this.species = species
//         this.sound = sound
//     }
//     soundMakes() {
//         return `${this.species} make ${this.sound}`
//     }
// }
// class Dog extends Animal {
//     constructor(species, sound, color) {
//         super(species, sound)
//         this.color = color
//     }
//     soundMakes() {
//         super.soundMakes()
//         return `${this.species} is ${this.color}`
//     }
// }
// let dog1 = new Dog("european", "bark", "brown")
// console.log(dog1.soundMakes());


//9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
// class Bank {
//     constructor(name) {
//         this.name = name;
//         this.branches = [];
//     }
//     addBranch(branch) {
//         this.branches.push(branch);
//         console.log(`${branch} added  ${this.name}`);
//     }
//     removeBranch(branch) {
//         const index = this.branches.indexOf(branch);
//         if (index !== -1) {
//             this.branches.splice(index, 1);
//             console.log(`${branch} removed  ${this.name}`);
//         } else {
//             console.log(`${branch} not found ${this.name}`);
//         }
//     }
//     displayBranches() {
//         console.log(`Branches of ${this.name} bank:`);
//         this.branches.forEach(branch => {
//             console.log(branch);
//         });
//     }
// }
// let bank1 = new Bank("Broke Bank");
// bank1.addBranch("Left Branch");
// bank1.addBranch("Right Branch");
// bank1.displayBranches();
// bank1.removeBranch("VIP Branch");
// bank1.displayBranches();


//10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
// class Product {
//     constructor(productId, name, price, quantity) {
//         this.productId = productId;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     totalPrice() {
//         return this.price * this.quantity;
//     }
// }
// class PersonalCareProduct extends Product {
//     constructor(productId, name, price, quantity, warrantyPeriod) {
//         super(productId, name, price, quantity);
//         this.warrantyPeriod = warrantyPeriod;
//     }

//     totalPrice() {
//         const basePrice = super.totalPrice();
//         const totalWarranty = basePrice + this.warrantyPeriod * this.quantity;
//         return totalWarranty;
//     }
// }
// let shirt = new PersonalCareProduct("white", "shirt", 25, 2, 1);
// let totalPrice = shirt.totalPrice();
// console.log(`Product: ${shirt.name}`);
// console.log(`Total Price: ${totalPrice}`);


//11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
// class BankAccount {
//     constructor(number, name, balance) {
//         this.number = number;
//         this.name = name;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//         } else {
//             console.log('Invalid deposit amount.');
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
//         } else {
//             console.log('Invalid withdrawal amount or insufficient funds.');
//         }
//     }

//     transfer(target, amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             target.deposit(amount);
//             console.log(`Transferred ${amount} to ${target.name}.`);
//         } else {
//             console.log('Insufficient funds.');
//         }
//     }
// }
// let account1 = new BankAccount(1, 'John Doe', 1000);
// let account2 = new BankAccount(2, 'Jane Smith', 1500);

// account1.deposit(500);
// account1.withdraw(200);
// account1.transfer(account2, 300);

// console.log(`Account 1 balance: $${account1.balance}`);
// console.log(`Account 2 balance: $${account2.balance}`);


//12. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    add(department) {
        this.departments.push(department);
        console.log(`Department "${department}" added to ${this.name} University.`);
    }

    remove(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`${department} removed from ${this.name}`);
        } else {
            console.log(`${department} not found ${this.name}`);
        }
    }

    display() {
        console.log(`Departments of ${this.name} University: ${this.departments.join(', ')}`);
    }

}

// Example usage
let myUniversity = new University("My University");

myUniversity.add("Computer Science");
myUniversity.add("Physics");
myUniversity.display();

myUniversity.remove("Physics");
myUniversity.display();
