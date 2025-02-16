function add(a: number | string, b: number | string): number {
  //check if both arguments are number
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  //check if both arguments are string
  if(typeof a === 'string' && typeof b === 'string'){
    return parseFloat(a) + parseFloat(b);
  }
  //check if one argument is string and other is number
  if(typeof a === 'string' && typeof b === 'number'){
    return parseFloat(a) + b;
  }
  if(typeof a === 'number' && typeof b === 'string'){
    return a + parseFloat(b);
  }
  //throw an error if neither of the condition matches
  throw new Error("Invalid input type");
}

let result = add("1", 2); // Works Correctly
console.log(result); // Output: 3