// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     introduce() {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет и я ${this.gender}`);
//     }
// }

// class Student extends Person {
//     Sigma(name, age, gender, course) {
//         super(name, age, gender);
//         this.course = course;
//     }

//     introduce() {
//         super.introduce();
//         console.log(`Я учусь на курсе ${this.course}.`);
//     }
// }

// const student = new Student("Анна", 20, "женщина", "Информатика");
// student.introduce();



// class BankAccount {
//     #balance;

//     constructor() {
//         this.#balance = 0;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         } 
        
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//         } 
        
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getBalance());
// account.withdraw(100);



// document.addEventListener("DOMContentLoaded", () => {
//     const header = document.getElementById("header");
//     const button = document.getElementById("changeTextButton");

//     button.addEventListener("click", () => {
//         header.textContent = "Новый текст";
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const header = document.getElementById("header");
//     const button = document.getElementById("changeTextButton");

//     button.addEventListener("click", () => {
//         header.style.color = "red"; 
//     });
// });


// const content = document.getElementById("content");
// const button = document.getElementById("toggleButton");

// button.addEventListener("click", () => {
//     if (content.style.display === "none") {
//         content.style.display = "block";
//         button.textContent = "Hide";
//     } else {
//         content.style.display = "none";
//         button.textContent = "Show";
//     }
// });
