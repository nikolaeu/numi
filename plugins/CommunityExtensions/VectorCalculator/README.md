# Vector calculator extension for Numi

## What is this extension for?
This extension allows you to find the dot product and calculate the angle between two vectors.

## Installation
Simply download the .js file to your numi extensions directory.

## How to use it
Create a vector using the `vec` function. Use `;` to seperate numbers. 

Note: A negative number can only be used if assigned to a variable first.

### Examples

```
x = -2
u = vec(4;5;x)
v = vec(1;2;1)

dot(u;v)               // 12
angle(u;v)             // 0.752 rad
```


```
a = vec(8;7)
b = vec(3;1)

angle(a;b) in degrees  // 22.751 °
```