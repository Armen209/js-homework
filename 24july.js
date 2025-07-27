//TASK 1
let symb1 = Symbol("fff");
let symb2 = Symbol("fff");

console.log(symb1 == symb2) //false

let obj = {
    [symb1] : "Value for symb1",
    [symb2] : "Value for symb2"
}

console.log(obj[symb1])
console.log(obj[symb2])

console.log(Object.keys(obj))

let symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols)
console.log(symbols.map(symb => obj[symb]))

//Task 2
let obj1 = {};// 1 modul
let sym1 = Symbol.for('session');
obj1[sym1] = "Value 1";

let obj2 = {}; //2 modul
let sym2 = Symbol.for('session');
obj2[sym2] = "Value 2";

console.log(sym1 == sym2)// equal

console.log(obj1[sym1]); // value 1
console.log(obj2[sym2]); // value 2

console.log(Symbol.keyFor(sym1))//session
console.log(Symbol.keyFor(sym2))//session


//Task 3
class AdminOnly{
    static [Symbol.hasInstance](instance){
        return instance && instance.role == "admin"
    }
}

let user1 = {name:"James",role :"admin"}
let user2 = {name:"Bob",role:"User"}

console.log(user1 instanceof AdminOnly)
console.log(user2 instanceof AdminOnly)


//Task 4 
let myObj = { //array like object 
    0:"12",
    1:"23",
    length:2
}
// not spreadable
myObj[Symbol.isConcatSpreadable] = false;
console.log([].concat(myObj)) 

//spredable
myObj[Symbol.isConcatSpreadable] = true;
console.log([].concat(myObj)) 

//Task 5
let objItr = {
    arr:[1,2,3,4,5],
    [Symbol.iterator](){
        let index = 0;
        let self = this;

        return {
            next(){
            console.log(`index ${index}`);
            if(index < self.arr.length){
                return {value : self.arr[index++],done:false};
            }
            else {
                return {value: undefined , done:true}
            }
        },
        reset(){
            index = 0;
            console.log("reset");
        }
    }
}
};

let iter = objItr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

iter.reset();
console.log(iter.next());


//Task 6
let stringObj = {
    arr:["Barcelona","Juventus","FC Bayern","Athletico Madrid"],
    [Symbol.iterator](){
        let index = this.arr.length - 1;
        const self  = this;
        return {
            next(){
                if(index >= 0){
                    return {value : self.arr[index--],done:false};
                } else {
                    return { value: undefined, done: true }
;
                }
            }
        }
    }
}


for (let str of stringObj) {
  console.log(str);
}
