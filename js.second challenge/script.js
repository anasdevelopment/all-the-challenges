//2 javascript program that find the unique elements from two arrays.
//not reached yet 
//3 function to filter false, null, 0 and blank values from an array. 
const arr=[58, '', 'abcd', true, null, false, 0];
function filter_array_values(arr){
    for (let i=0;i<arr.length;i++){
        if(arr[i]==0||arr[i]==null||arr[i]==""||arr[i]==false){
            delete arr[i];
        }
    }
    return arr;
}
console.log(filter_array_values(arr))

//4 get difference between two dates in days 
//not reached

//5  function to convert a Unix timestamp to time. Go to the editor
//not reached


//6 program to get the name of a day base on a given date in string format 
//not reached


//7 get the day ot the begin,end of a week for given date.
//not reached


//8 swap to uppercase or lowercase
 function swapCase(str){
   let em="";
   for(let i=0;i<str.length;i++){
    if (str[i] >= "a" && str[i] <= "z"){
      em+=str[i].toUpperCase();
    }else{
     em+=str[i].toLowerCase();
    }
  }
  return em;
 }
 console.log(swapCase("AaBbc"));//I don't know why this doesn't work(!)



//9 humanized number (Formats a number to a human-readable string
function humanize_format(num){
  if(num%10==1){
    return num+"st"
  }
  else if(num%10==2){
    return num+"nd"
  }
  else if(num%10==3){
    return num+"rd"
  }else{
    return num+"th"
  }
}
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));


///10 function to check a given string is in Flat case or not. 
function check_FlatCase(string){
  if(typeof(string) === `number`){
    return "it must be a string !!idiot"
  }
  let ok = true
  for(let i=0;i<string.length;i++){
    
      if(string[i]==" "){
        ok = false
      }
      else if("A">=string[i]<="Z"){
        ok= false
      }
    
  }
  return ok
}
console.log(check_FlatCase("a"))
console.log(check_FlatCase(89590))
console.log(check_FlatCase("anas bel haj "))
console.log(check_FlatCase("Anasbelhajfraj "))
console.log(check_FlatCase("anasbelhajfraj"))


//11 function to check whether an object contains given property
//not reached yet



//12program to chunk an array into smaller arrays of a specified size.
const arr=[1,2,3,4,5,6,7,8,9,10] ;
function chunkArray(arr, number, arrelem) {
  let major = [];
  for (let i = 0; i < number; i++) {
    major[major.length] = arr.slice(0, arrelem);
    arr = arr.slice(arrelem, arr.length);
  }
  if (arr.length != 0) {
    arr.forEach((element) => {
      major[major.length] = element;
    });
  }

  return major;
}

console.log(chunkArray(arr, 3, 3));



//13program to capitalize the first letter of every word in a string.


let boss = 'i am a wealthy man';

function firstLetter(str) {
  let result = str.split('');
  result[0] = result[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (result[i] === ' ') {
      result[i + 1] = result[i + 1].toUpperCase();
    }
  }
  return result.join('');
}
console.log(firstLetter(boss));


//14 program that calculate the facturial of a number 
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(0)); 




//15 program to sort an array of objects, ordered by a property, based on the array of orders provided.
//not reached yet 
