//print odd index array

arr=[2,5,6,6,8,7,7,10];
let bag=""
for(let i=0;i<arr.length;i++){
  if(i%2==1){
    bag+=arr[i]+" "
  }
}
console.log(bag)