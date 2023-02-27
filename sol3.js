// print right neighbour are vowel or not 

let str="character"
let bag=""
for(let i=0;i<str.length;i++){
  if(str[i+1]=="a"||str[i+1]=="e"||str[i+1]=="i"||str[i+1]=="o"||str[i+1]=="u"){
      bag+=str[i]+" "
  }
}
if(bag==""){
  console.log("NOt found")
}else{
console.log(bag)
}