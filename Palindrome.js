// program to check the string is palindrome or not


let string="racecar";
let bag=true;

for(let i=0; i<string.length/2; i++){
  if(string[i] !== string[string.length-1-i]){
    bag==false;
    
    
  }
}
    if(bag==true){
      console.log("it is a palindrome");
    }
    else{
    console.log("it is not a palindrome");
    }
