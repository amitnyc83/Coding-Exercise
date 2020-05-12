Create a function that takes any non-negative integer as an argument and return it with its digits in descending order.
Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 98765432


function DescendingSort(number) {
  // #create a variable to store an array when you convert the number #into a string using the built-in toString method and split into #individual elements using the split method. The split method #creates an array. I am using the ES6 const keyword because i do not plan to change the array 
  const numberArray = number.toString().split('');

  // before i start sorting, i want to check if the number contains more then one digit, so i created a base case to check that. If the number is just one digit, i can return that number right away without sorting.

  if (numberArray.length == 1){
    return parseInt(numberArray)
  }

  //#You can use console.log to check the newly created array
  console.log(numberArray);

  //Using the sort function provided by JavaScript, which you can use on an array, passing 2 arguments, you can arrange the an array in desending order by checking if b(the one index after the current index) is larger than a and swapping it    

  numberArray.sort((a,b) => b - a);

  // Once its sorted, I joining the numberArray using the join method into one string which contains the sorted number
  const results = numberArray.join('');

  // lastly, before i am returning the number, i am cconverting the string bacck into a integer using the parseInt built-in method 
  return parseInt(results);
}

DescendingSort(214452)




Given a string of words, return the length of the shortest word(s). The given data will always be a string and will never be empty.
Examples:
Input: 'Test, this is a test' Output: 1
Input: 'The dog’s mother was happy' Output: 3
Input: 'Extraordinarily appetizing pineapple!': Output: 9


function shortestWord(str){

  //The first thing we want to do is remove any non alphanumeric characters from the string as they do not techniccally qualify as a word(example as such these characters !#&?), commas and extra whitespaces. We can achieve that by using Regex(Regular Expressions). Using JavaScript built-in replace method. the ^ stands for the start of the string, followed by \w for any word character, followed by \s for any whitespace and /g is for the global matches. Without the /g the method will return the first occurences. Once we have removed all non alphanumeric characters, we will use the split method to split the string into an array of words. Remember to leave a space between the qoutes if not the array will be one big string. I use the const keyword here because we won't be change this array and it helps us by not being redeclared somewhere else in the program or code  
  const wordArray = str.replace(/[^\w\s]/g, '').split(' ');
  // You can always use console.log to print the results of the array to the terminal.
  console.log(wordArray)
  // We need a counter to track and store the length of the word when we loop through the array. Try to be descriptive with your variables. Here i use the let keyword which is similar to the const keyword but allows a new value to be assigned to the variable.
  let shortestWordLength = 0;

  //We need to loop through the array. There are a few different loops but here we will use the for loop which takes 3 arguements. First arguement is a counter whicch wee set to 0 because the first index of an array always start at 0; secondly we need a way to know when to exit the loop so we check to see if the counter is greater than the array's length. Length is different from index as the counter for the length starts at 1 (so if the array has 3 values, the length would be 3 while the indexes would run from 0 to 2). Lastly, we need to increment the counter as we are looping through the array.  

  for(let i = 0; i < wordArray.length; i++){
    // Here we use an if statement with 2 arguements using the 'or' operator. Basically what it means is that either of the statements evaluate to true, the code inside the block/ curly brackets will run. If shortestWordLength equals to 0 or if the length of the word at index i is smaller/less than the value of shortestWordLength's value the code inside the block runs. If not we will increment the count for i.
    if(shortestWordLength == 0 || wordArray[i].length < shortestWordLength){
      // We set the value of the variable to equal the length of the word at index i 
      shortestWordLength = wordArray[i].length;      
    }
  }
  // we return the value store in the variable after we exit the loop
  return shortestWordLength;
}

shortestWord('The dog’s mother was happy')



Given a number return the sum of all the multiples of 3 or 5 below the given number.
Examples: 
Input: 10 Output: 23
Input: 20 Output: 78

function sumOfMultiples(num){
  // we create a variable to keep track of the sum of the multiples. This variable needs to be outsidde of the loop so that it does not reset everytime the loop runs
  let sum = 0;
  
  // There are many different ways to the solution. I am using the for loop which takes 3 arguements. We start we setting a counter. Here wee start we 1 for the counter because 0 is always a multiple of a number but 0 added to the sum(0) will still be 0 so wee can start with 1; we ccheck if the counter is smaller than the number. Lastly after every interation of the loop we want to increment the counter. 
  for(let i = 1; i < num; i++){
    // We can use if and else if statements but i used the '||' operator here which basically checks to if the current counter(i) is divisible by 3 or 5 and does not have a remainder/decimal point (is a whole number) using the modulo operator. If eeither of the statements are true, we can enter the code block and execute the code which is adding the value of i to the sum
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }
  // Once we exit the for loop, we will return the sum
  return sum;
}


sumOfMultiples(20);


Write a function that takes in an array as an argument. The function moves all of the zeros to the end of the array while ensuring the order of the other elements are unchanged.
Example:
Input: ['Hello','World’,3,1,0,9,0,1,3,9,true]: Output: ['Hello','World’,3,1,9,1,3,9,true,0,0,]

const arr = ['Hello', 'World',3,1,0,9,0,1,3,9,true]

function moveZeros(arr){
  // i create 2 empty array here. 1 to store anything that is not a Zero and the other for just zeros which i will be combining together after looping through the original array.
  let sortedArray = [];
  let arrayWithZeros = []

  // Here we create a for loop to loop through the original array and check if the value of array at index is Not equal to a zero using the !== operator. If that statement is true, we push the value of arr at index i into the sortedArray. Else we push it into the array ccalled arrayWithZeros

  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      sortedArray.push(arr[i])
    } else {
      arrayWithZeros.push(arr[i])
    }
  }
  // Here i am using an ES6 spread operator to combine the 2 array together, combining the values of arrayWithZeros to the end of the sortedArray There are a few ways this can be done using concat, unshift to name a few.  
  sortedArray = [...sortedArray, ...arrayWithZeros];
  // Finally returning the sortedArray
  return sortedArray;
  
  
}

moveZeros(arr)
