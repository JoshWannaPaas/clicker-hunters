
// f(n) =  f(n-1) + f(n-2)
function fib (n) {
  // Base case where n = 0, which is 0
  if(n === 0)
    return 0;
  // Case where n = 1, which is 1
  else if(n === 1)
    return 1;
  // Case where n > 1, which is the sum of the previous 2 numbers
  // n =  n-1 + n-2
  else
    return fib(n-1) + fib(n-2);
}
// O(2^n)


const memo = {};

function dynamicFib (n) {
  if (memo[n] !== undefined) {
    return memo[n] 
  }
  // Base case where n = 0, which is 0
  if(n === 0)
    return 0;
  // Case where n = 1, which is 1
  else if(n === 1)
    return 1;
  // Case where n > 1, which is the sum of the previous 2 numbers
  // n =  n-1 + n-2
  else {
    const answer = dynamicFib(n-1) + dynamicFib(n-2)
    memo[n] = answer
    return answer;
  }
}

const fibnum = 42;

console.time("dynamic program")
console.log(dynamicFib(fibnum))
console.timeEnd("dynamic program")

console.time("not dynamic program")
console.log(fib(fibnum))
console.timeEnd("not dynamic program")
