console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*  for (let i = 1; i <= 100; i++) {
    // If there is a remainder at all
    if (i % 2 == 1) {
        console.log(i);
    }
}
    




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    console.log(i);
    //if both are true
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FIZZBUZZ");
    
    //Otherwise
    } else {
        //if divisible by 3
        if (i % 3 == 0) {
            console.log("FIZZ");
        } 
        //if divisible by 5
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
} */

//Exercise 3 section
//let number = 1;

/*do {
  if (number % 2 !== 0) {
    console.log(number); 
  }
  number++;
} while (number <= 100);*/

/*while (number <= 100) {
  if (number % 2 !== 0) {
    console.log( `${number} bologna` );
  } 
  number++;
}
*/

//Exercise 4

/*let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 0; i <= n; i++) {
  if ( i == value) {
   console.log ( "Found Value");
  } else ( i == 0 );
    console.log ( "Did not find value");
}
*/

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000



for (let i = start; i <= end; i++) {
  console.log(i);
  
      if ( i == fizzDivisor, i <= 10, i++) {
    console.log("FIZZ");
    } else (i == buzzDivisor); {
          console.log("BUZZ");
    } 
      
}
  

  

