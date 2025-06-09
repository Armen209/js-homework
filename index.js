function accept(a,b,c){
    return a+b==c ? true : false
}

//console.log(accept(1,2,3));
"______________________________________________________"

function eliAccept(a,b,c){
    if(c-(a+b) <=Number.EPSILON) return true;
    return false
}

//console.log(eliAccept(0.1,0.2,0.3))

function strstr(src,dest){
    let match=true
    for(let i=0;i<src.length - dest.length;++i){
        for(j=0;j<dest.length;++j){
            if(src[i+j] !=dest[j]){
                match = false 
                break
            }
        }
        if(match) return true
    }
    return false
}

//console.log(strstr("Javascript","Java"))

//forEach
let arr=[1,2,3,4]
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

myForEach(arr, (item) => {
  console.log(item);
});

//myMap
function myMap(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;++i){
        let changed=callback(arr[i],i,arr)
        result.push(changed)
    }
    return result
}

let mapped=myMap(arr,(num) => num * 2)
console.log(mapped)

//myFilter
function myFilter(arr,callback){
    let result=[]
   for(let i=0;i<arr.length;++i){
    if(callback(arr[i],i,arr)){
        result.push(arr[i])
    }
   } 
   return result
}
console.log(myFilter(arr,item=>item%2==0))

//mySome
function mySome(arr,callback){
    for(let i=0;i<arr.length;++i){
        if (callback(arr[i],i,arr)){
            return true
        }
    }
    return false
}
console.log(mySome(arr,item=>item >=3))

//myEvery
function myEvery(arr,callback){
   for(let i=0;i<arr.length;++i){
    if(!callback(arr[i],i,arr)){
        return false
    }

   }
   return true
}

console.log(myEvery(arr,item => item >1))

//myIndexOf
function myIndexOF(arr,searchElement,fromIndex){
    if(fromIndex<0) fromIndex=arr.length+fromIndex
    if(fromIndex<0) fromIndex = 0
    for(let i=fromIndex;i<arr.length;++i){
        if(arr[i] === searchElement)
            return i
    } return -1;
}

//console.log(myIndexOF(arr,2,0)) 
console.log(myIndexOF(arr,2,2)) 