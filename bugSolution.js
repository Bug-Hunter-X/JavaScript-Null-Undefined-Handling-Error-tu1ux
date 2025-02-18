function foo(a, b) {
  // Handle null or undefined values
  a = a === null ? 0 : a;
  b = b === null ? 0 : b; 
  return a + b; // Performs addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(undefined,5)); // Output: 5
console.log(foo(5,undefined)); // Output: 5