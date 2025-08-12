//1
function foo(){
   console.log("Start");
   const start = Date.now();
   while (Date.now() - start < 3000) {
       
   }
   console.log("End")
}

foo();

//2
console.log("Start");
setTimeout(() => console.log("Timeout done"), 2000);
console.log("End");

//3
function greetLater(name){
   setTimeout(() => {
       console.log(`hello ${name}`);
   },2000)
}
greetLater("Armen");

//4
setTimeout(() => {console.log("first")},1000);
setTimeout(() => {console.log("second")},2000);
setTimeout(() => {console.log("third")},3000);

//5
setTimeout(() => {console.log("first")},0);
setTimeout(() => {console.log("second")},0);
setTimeout(() => {console.log("third")},0);

//6
console.log("Dialing...");

setTimeout(() => {
 console.log("Ringing...");
}, 1000);

setTimeout(() => {
 console.log("Call connected!");
}, 3000);

7
function boilWater(callback){
   console.log("Boiling water...");
   setTimeout(()=>{
       console.log("Ready");
   },3000)
}

boilWater();

8
function boilWater(callback){
   console.log("Water is boiling ...");
   setTimeout(() => {
       if(callback) callback();
       console.log("Water is ready!!!");
   }, 2000)
}

function addPasta(callback){
   console.log("Adding pasta ...");
   setTimeout(() => {
       if(callback) callback();
       console.log("Pasta added");
   },1000);
}

boilWater(() => {
   addPasta(() => {
       console.log("Pasta is cooking");
           }
       ) 
   }
)

//9
let randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
setTimeout(() => {
   console.log(`Random number ${randomTime}`)
},randomTime);

//10
console.log("3...");

setTimeout(() => console.log("2..."), 1000);
setTimeout(() => console.log("1..."), 2000);
setTimeout(() => console.log("Go!"), 3000);

//11
console.log("Task started");
const start = Date.now();

setTimeout(() => {
 const end = Date.now();
 const elapsed = end - start; 
 console.log("Task finished");
 console.log(`Real delay: ${elapsed}ms`);

}, 2000);

//12

const btn = document.getElementById("btn");
const output = document.getElementById("output")
btn.addEventListener("click",function afterClick(){
  output.textContent = "Processing ...";
   setTimeout(() => {
      output.textContent = "Done";
   },2000)
})

//13.1
function handleRequest(clientId,delay){
console.log(`Handling ${clientId}`);
setTimeout(() => {
    console.log(`${clientId} responsed`)
},delay)
}

handleRequest("client1", 3000);
handleRequest("client2", 1000);
handleRequest("client3", 2000);



//13.3
function countDown(n) {
  if (n <= 0) return; 
  console.log(n);
  setTimeout(() => {
    countDown(n - 1);  
  }, 1000);
}

countDown(5);
