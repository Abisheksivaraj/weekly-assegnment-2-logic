'use strict'


// 1.Write a JavaScript function to check if a given number is even or odd.

const mynumber = prompt("Enter number")

if(!isNaN(Number(mynumber))){
    if(mynumber % 2 ==0){

  console.log("the number is even");
}else{
  console.log("the number is odd");
}
}
else{
  console.log("Please type a Number :) ")
}



// 2.Write a JavaScript program to calculate the factorial of a number.

var i , no , fact;
fact = 1;
no = prompt("enter factorial");

for(i=1; i<=no; i++) {
  fact = fact*i;
  console.log(fact)
}

console.log("factorial:"+fact)



// 3.Write a JavaScript program to find the sum of all numbers in each array, excluding
// any numbers that are less than 0.

let arr = [10,20,30,40,50]

let sum = 0;

for(let i=0; i < arr.length; i++) {
  sum+=arr[i];
}

console.log("sum is " +sum)


// 4.Write a JavaScript program to check if a given number, is a perfect square.

let squareNumber = prompt("enter an number")

let A =Math.sqrt(squareNumber);

if(squareNumber == A*A){
  console.log("this is an perfect square")
}else{
  console.log("its not an square")
}


// 5. Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.
// Note : As the letter &#39;y&#39; can be regarded as both a vowel and a consonant, we do not
// // count &#39;y&#39; as vowel here.

function vowel_count(str1)
{
  let vowels = "aeiouAEIOU";
  let vowelsCount = 0;

  for(let i=0; i<=str1.length; i++){
    if(vowels.indexOf(str1[i])!==-1)
    {
      vowelsCount += 1;
    }
  }

  return vowelsCount
}

console.log(vowel_count("FULL STACK DEVELOPER at SkillSafari"))


// 6.adding rows using JS;

// 


// 8. Write a JavaScript program to find the Armstrong numbers of 3 digits.

let i, j, k;
i = 1;
j = 0;
k = 0;

for(i=1; i<10; i++)
{
  for(j=0; j<10; j++)
  {
    for(k=0; k<10; k++)
    {
      let pow =(Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
      let plus = (i*100 + j*10 + k);
      if(pow==plus)
      {
        console.log(pow);
      }
    }
  }
}

// 9. Write a JavaScript program to check if two given integers have opposite signs.