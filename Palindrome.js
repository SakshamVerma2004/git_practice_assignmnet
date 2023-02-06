let str="naan";
let check="";

for(let i=str.length-1;i>=0;i++){
   check=check+str[i];

if(check==str){
  console.log("Palindrome");
}
else{
  console.log("Not a Palindrome");
}