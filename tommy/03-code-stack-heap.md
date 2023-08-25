
# Words

A 32-bit machine has words that are 32-bits long. 

All addresses into memory are 1 word long.

If your machine is 8-bits, then your RAM (memory) can have positions 0-255. This RAM has 255 words * 8 bits each = 2,048 bits total. 
All 8-bit computers could not have larger than 2kb of RAM. So sad. 

# Pointers vs References

Values can be stored in memory, like numbers, characters, lists, and more. 
To find these values, you need to know their address. These addresses are just numbers.
For example, the list could be in position `100` in memory.

In C, C++, and C#, you would store this address directly as a pointer. The pointer is 
literally just the number `100`. If you want to access the value, you would need to 
"dereference" the list. This goes to the memory position `100`. 

The problem with pointers is that **they are just numbers**. That means you can add or subtract
with them. This is bad. What if you subtract 1 from that list? You end up at unknown memory!
Very bad. Often unintentional. Often malicious and dangerous when done intentionally. 

References are "child-proof" pointers. They still do the same thing, store the address of 
a value. They just are **not** numbers, so you cannot do sus shit. 

# Stack vs Heap

The Stack stores values that do NOT change in size. These are "primatives". In Javascript:
- numbers (integers, floats, negatives, all the same size in Javascript)
- characters (letters are all one word)
- Strings (Javsacript treat strings as immutable, and thus fixed size)

The Heap stores values that DO CHANGE in size. These are "objects". In Javascript:
- Objects (dictionaries, etcs).
- Lists (they are dynamically sized).
- Callback functions (In Javascript, This data type is an `Object` in disguise. It's an instance of `Function` class).

When you say
```typescript
let x = 0;
let y = "hello";
```
These save to the Stack the values 0 and "hello". 

When you type 
```typescript
let a = [1,2,3];
let b = {
  name: "Tommy"
}
```
These build these objects in the HEAP. The values in `a` and `b` are not the value, but the **references** to the real values in the HEAP. 

When you type 
```typescript
let a = [1,2,3];
let b = a;
```
You do NOT clone the list `[1,2,3]`. Instead, you are cloning the reference to the list. Now both point to the heap. 
If you set `a[0] = 4`, `b[0]` changes too because what happens is the value on the HEAP is getting updated. Both of 
these look at the same location, so if one changes the HEAP, the other will notice automatically. 

If you actually want to clone it, you need to deep clone. Use `let b = _.deepCopy(a)`;



# Const vs Let

In addition to both being better scoped than a `var`, these key words define how they interact.





