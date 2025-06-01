//task 1
function foo(string){
    let count=0;
    while(string[count]!=undefined){
        count++
    } return count
}

//task 2
function toUpper(str){
    return str.toUpperCase()
}

//task 3
function sum(a,b){
    return a+b
}

//task 4
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}



//task 5
function merge(arr1, arr2) {
    return [...arr1, ...arr2];
}

//task 6
let string="lear Javascript"
console.log(string.includes("Java"));

//task 7
let numList = [3, 6, 9, 12];
console.log(numList.indexOf(9))

//task 8
let expenses = [50, 75, 100];
let gumar=0;
for(let i=0;i<expenses.length;++i)
{
    gumar+=expenses[i]
}
console.log(gumar)

//task 9
function f(s1,s2){
    return s1.includes(s2)
}

//task 10
function sumOfNums(array){
    let res=0;
    for(let i=0;i<array.length;++i){
        if(typeof(array[i]) == "number"){
            res+=array[i];
        }
    } 
    return res
}
console.log(sumOfNums([1,2,"barev",true]))

//task 11
const evenOrOdd = (n) => n % 2 === 0 ? "even" : "odd";



