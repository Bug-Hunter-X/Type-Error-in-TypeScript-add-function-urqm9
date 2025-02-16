# Type Error in TypeScript
This repository demonstrates a common type error in TypeScript and provides a solution. The error arises from a type mismatch in the function arguments.

## Bug
The `add` function is defined to take two numbers as input and return a number. However, the function is called with a string and a number, which leads to a type error. 

## Solution
The solution involves type checking before performing the addition operation. A function is created that handles both number and string arguments and returns the correct sum.