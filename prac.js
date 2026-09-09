function sayHello(){
    alert("Hello from javascript!");
}

function printBinary(n){
    let queue=[];
    queue.push("1");

    for(let i = 1; i<=n; i++){

        let curr = queue.shift();
        console.log(curr);

        queue.push(curr+"0");
        queue.push(curr+"1");

    }
}

const cars = ['volvo', 'BMW', 'LandRover', 'Jaguar'];

let len = cars.length;
let txt="";

for(let i =0; i<len;i++){
    txt+=cars[i]+" ";
}


let text = "";

loop1: for(let i=1; i<5;i++){
    loop2: for(let j=1; j<5;j++){
        if(j==3){break loop1;}
        text+=j;
    }
}


function binarySearch(arr, left, right, target) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearch(arr, mid+1, right, target);
    }

    return binarySearch(arr, left, mid-1, target);
}
function power(base, exponent=1){
    return base**exponent;
}

function towComp(n){
    return(~n+1);
}

function nums(...numbers){
    console.log(numbers);
}

function sum(...nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}

const add = function(a,b){
    return a+b;
};

const greet = function(name){
    console.log("Hello " + name);
}

function greetUser(callBack, name){
    callBack(name);
}

const factorial = function fac(n){
    if(n<1){
        return 1;
    }
    return n*fac(n-1);

}

function execute(callback){
    callback("Ali");
}

execute(name=> console.log("Hello" + name));

execute(function(name){
    console.log("Hello " + name);
});

greetUser(greet, "Ali");

function calculate(operation, ...args){
    return operation(...args);
}

function sum(...nums){
    let sum=0;
    for (let num of nums){
        sum+=num;
    }
    return sum;
}

function multiply(...nums){
    let pro=1;
    for (let num of nums){
        pro*=num;
    }
    return pro;
}

const numbers = [1, 2, 3, 4];
const double = numbers.map(num=>num*2);

console.log(double);

console.log(calculate(sum, 1, 2, 3, 4, 5));
console.log(calculate(multiply, 1, 2, 3, 4, 5));


{
    function outer(){
        let message = "Hello";

        function inner(){
            console.log(message);
        }

        return inner;
    }
    const  fn = outer();
    fn();
}


{
    function counter(){
        let count =0;

        return function(){
            count++;
            console.log(count);
        };
    }

    const c=counter()
    c();
    c();
    c();
}

{
    function bankAccount(){
        let balance=1000;
        return{
            getBalance(){
                return balance;
            },
            deposit(amount){
                balance+=amount;
            }
        };
    }

    const account = bankAccount();
    console.log(account.getBalance());
    account.deposit(200);
    console.log(account.getBalance());

}


{
    function counter(){
        let count =0;

        return function(){
            count++;
            return count;
        };
    }

    const a = counter();
    console.log(a());
    console.log(a());
    console.log(a());
    const b = counter();
    console.log(b());
    console.log(b());
    console.log(b());
}

{
    function bankAccount(){
        let balance = 0;

        return{
            credit(amount){
                balance+=amount;
            },
            debit(amount){
                balance-=amount;
            },
            getBalance(){
                return balance;
            }
        };
    }

    const account=bankAccount();
    account.credit(100);
    console.log(account.getBalance());
}

{
    function Person(name, age){
        this.name=name;
        this.age=age;

        this.greet = function(){
            console.log(`Hi, I'm ${this.name}.`);
        };
    }

    const p1 = new Person("Gulok", 20);
    const p2 = new Person("Aman", 20);

    p1.greet()
}

{
    function Person(name, age){
        this.name=name;
        this.age=age;
    }
    Person.prototype.greet = function(){
        console.log(`Hi, I'm ${this.name}.`);
    };
    Person.prototype.showAge=function(){
        console.log(`My age is ${this.age}.`);
    }
    console.log(typeof Person);

    
    const p = new Person("Aman", 20);
    console.log(p);
    console.log(Person.prototype);
    console.log(typeof(p));
}

{
    class Person{
        constructor(name, age){
            this.name=name;
            this.age=age;
        }
        greet(){
            console.log(`Hello ${this.name}`);
        }
    }
    console.log(typeof Person);

    const p = new Person("Hello", 10);
}

{
    const student = {
        name: "Gulok",
        age: 20,
        course: "cse",

        greet : function(){
            console.log(`Hello, my name is ${this.name}.`);
        },

        address:{
            city: "Silchar",
            state: "Assam"

        }
        
    };
    const key = "age";
    console.log(student.name);
    console.log(student[key]);
    console.log(student["course"]);
    student["RollNo"] = "csbm25004";
    delete student.course;
    console.log("course" in student);
    student.greet();
    console.log(student.address.state);
}

{
    const key = "name";

    const Person={
        [key]: "Alex"
    };
}

{
    //Destructuring

    const Person ={
        name: "Hello",
        age: 20
    }
    const copy = { //shallow copy
        ...Person 
    }
    const {name, age} = Person;
    console.log(name, age);
    console.log(Object.keys(Person));
    console.log(Object.values(Person));
    console.log(Object.entries(Person));

    for(const [key, value] in Object.entries(Person)){
        console.log(key, value);
    }

    for(const key in Person){
        console.log(key, Person[key]);
    }

}


{
    const person = new Object();
}

{
    function Student(name, age){
        if(!(this instanceof Student)){
            throw new Error("Student must be called with new");
        }
        this.name=name;
        this.age=age;
        this.greet=function(){
            console.log("Hello!!");
        }
    }
    Student.prototype.getName=function(){
        console.log(`The name is ${this.name}.`);
    }

    const s1=new Student("Gulok", 20);
}

{
    function Person(name, age){
        this.name=name;
        this.age=age;

        return{
            message:"object created but a different object returned"
        };
    }
    const p = new Person("Hello", 20);
    console.log(p);
}

{
    class Person{
        constructor(name, age){
            this.name=name;
            this.age=age;
        }
        greet(){
            console.log("Hello!!!");
        }
    }
    const p = new Person("Hello", 12);
}

{
    function bankAccount(owner, balance){
        this.owner=owner;
        this.balance=balance;
    }

    bankAccount.prototype.deposit=function(amount){
        this.balance+=amount;
    }

    bankAccount.prototype.withdraw=function(amount){
        if(amount>this.balance){
            console.log("Insufficient balance!");
            return;
        }
        this.balance-=amount;

    }

    bankAccount.prototype.getBalance=function(){
        return this.balance;
    }
}