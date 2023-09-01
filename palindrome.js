
// palindrome code 


let str = "naman";
let sum=""
for(i=str.length-1;i>=0;i--){
    sum=sum+str[i];
}

if(sum==str){
    console.log(str,"is palindrome")
}
