//given an array find out the number of elements which both the neighbors are greater than elements
let arr=[5,7,6,9,8,10];
let count=0;
let bag=""
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]<arr[i-1] && arr[i]<arr[i+1]){
    bag+=arr[i]+" "
    count++
  }
}
console.log(bag,count)