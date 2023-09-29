
<= Big O
~  Theta
>= Little O

n is the size of the input

Theta (n)
O(n)
```typescript
function sum(list: number[]) {
  // Theta(1)
  let s = 0;
 
  // Repeat one time for all n items in the list
  for (let i = 0; i < list.length; i++) { // Theta (2 * n) = Theta (n)
    // Theta(1)
    const newS = s + list[i];
    // Theta(1)
    s = newS
  }
  return s;
}
```

By Computer Science convention, we assume these take 1 unit of time. 
- (Almost always) creating a variable
- Any math operations
- Accessing an index into a list
- Accessing a key in a dict

```typescript

function listHas4 (list: number[]) {
  // O (n)
	for (let i = 0; i < list.length; i++) {
    // O (1)
    if (list[i] === 4) {
      return true; // O (1)
    }
  }
  // O (n)
	for (let i = 0; i < list.length; i++) {
    if (list[i] === 4) {
      return true;
    }
  }

  return false;
}
```

```typescript
function startsWithVowel (message: string) {

  const vowels = ["a", "e", "i", "o", "u"];

  const firstLetter = message[0];
  for (let i = 0; i < vowels.length; i++) {
    if (firstLetter === vowels[i]) {
			return true;
		}
  }
	return false;
}
```

```typescript
function sort (list: numbers[]) {
  // O (n * n) because the j for loop is O(n) which is the list.length, but we're doing that list.length times from the i loop

  // this is basically the same as starting from 0 and incrementing up, since j will = i anyway
  for (let i = list.length; i >= 0; i--) {

    // O(n) where n is the list.length because j = i = list.length
    for (let j = i; j >= 0; j-- ) {
      // O(1) --> one time = O(4)
      if (list[i] > list[j]) {
        const temp = list[j];   // O(1)
        list[j] = list[i];      // O(1)
        list[i] = temp;         // O(1)
      }

    }
  }

  return list;
}
```

```typescript
function endsWithLy(word: string) {

  if(word[word.length - 2] === "l" && word[word.length - 1] === "y")
    return true;
  return false;

  for (i = 0; i < word.length - 1; i++) {
    if (word[i] === "l") {
      if (word[i+1] === "y") {
        if (i+1 === word.length - 1) {
          return true;
        }
      }
    }
  }
  return false;
}
```



There are two parts to all recursive functions
```typescript
function sumSmaller (n) {
  

// Base Case

// Recursive Case

}
```

```typescript

function fib (n) {
  // Base case
  if(n === 0)
    return 0;
  else{
    n += fib(n-1);
    return n;
  }
}
fib (1) = 1
fib (2) = 1
fib (3) = 2


```





