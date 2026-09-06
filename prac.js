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