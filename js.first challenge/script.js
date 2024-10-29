'use strict';
/*//the first question
function removeStr(str, ch, pos) {
    if (pos >= str.length || str.charAt(pos) !== ch) {
  
        if (!str.includes(ch)) {
            return `"${ch}" doesn’t exist in this string`;
        }
        else{
        return `"${ch}" doesn’t exist at this position`;}
    }
    return str.slice(0, pos) + str.slice(pos + 1);
}
const str = "Ali";

console.log(removeStr(str, "A", 0)); 
console.log(removeStr(str, "l", 2)); 
console.log(removeStr(str, "b", 1));




//2program to find the longest string from a given array
function findLongestWord(arr) {
    arr = arr.split(' ');
    var longest = 0;
  
    for(var i = 0; i < arr.length; i++) {
       if(arr[i].length >= longest) {
         longest = arr[i].length;
          } 
       }
    return longest;
  } 

  //3 get the largest even number from an array of integers.
  const num=[1,4,8,9,15,19,123,22,16,22,54,647];
  function highesteven(num){
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0)
          return num[i];
        }
    }



//4 replace the first digit in a string (should contains at least digit) with $ character.
let arr =["anas123","bel1haj1freaj9"]
arr=arr.map(function(X){
    for(let i=0;i<X.length;i++){
    if (Number(X[i])){
    X=X.replace(X[i],"$")
    }}
    return X
})
console.log(arr);



//5 swap two halves of a given array of integers of even length

let arr=[1,2,3,4,5,6,7,8,9,10]
let halfar = arr.slice(arr.length / 2) + "," + arr.slice(0, arr.length / 2);
arr = halfar.split(",");
console.log(halfar);
console.log(arr);

//6join all elements of the following array into a string. Go to the editor
function func() {
    let myColor = ["Red", "Green", "White", "Black"];
    let str = myColor.toString();
    console.log(str);
}
func(); 

//7JavaScript program to sort the items of an array. 
let sort=[3,8,7,6,5,-4,-3,2,1];
for (var i=0;i<X.length;i++){
    function sortev(X){
        if( X[i]<X[i+1]){
            X[i]=X[i+1]
        }
        return X
    }
}
//8 fizzbybuzz exercise 
let x=6
function fizez(){
    for (let i = 0; i <=100; i++) {
        if (i%3==0) {
            console.log('fizz')
        }
        if(i%5==0){
            console.log('buzz')
        }

        }if(i%5 && i%3){
            console.log('this is a fizzbuzz number')
        }
        else{
            console.log("average number")
        }
        return(x)
}

//JavaScript program to construct the following pattern, using a nested for loop. 

let rows=5;
for (let i = 1 ; i <= rows; i++){
    let pattern ="";
    for (let j=1; j <= i ,j++){
        j+="*";
    }
    console.log(pattern);
}

//JavaScript function to concatenates a given string n times (default is 1).
function laugh(str, n=1){
    return str.repeat(n) 
}
console.log(laugh("Ha!",3));
console.log(laugh("Ha!",4));
console.log(laugh("Ha!",5));
*/
