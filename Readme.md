## Numi

[Numi](http://numi.io) is a handy calculator app for macOS. It allows to describe tasks the natural way and instantly get an accurate answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`. 

You can use JavaScript extensions to add global variables, custom units or functions. Right now only limited set of API is available via JavaScript, but the plan is to open as much API as possible.

## Table of Contents

* [Logging](#logging)
* [Values and Variables](#values-and-variables)
* [Custom Units](#custom-units)
* [Custom Functions](#custom-functions)
* [List of Base Units](#list-of-base-units)

### Logging

Use `log` function to send output from your extension to log window. 

```
log("Function called!");
```

### Values and Variables

Each value in Numi might be represented in JavaScript as an object with a set of properties, describing decimal value, unit type etc. Here is the usual way of creating new values for Numi:

```
var value = { "double": 5, "unitId" : "USD" }
```

Use `numi.setVariable` function to declare global variables. 

```
numi.setVariable("xxx", { "double": 5, "unitId" : "USD" });
```

You can also use plain JavaScript numbers for cases when you'll need to return value for Numi. This will be treated as a value with decimal number.

```
numi.setVariable("yyy", 122);
```

### Custom Units

Use `numi.addUnit` to add new unit. `id` field required for internal use, and might be any unique literal. `phrases` contains string with comma-separated phrases that might be used for the unit, `format` field used for results formatting. 

Unit conversion limited to ratio-based conversion ATM. For each unit you can specify base unit identifier `baseUnitId` and `ratio` to that unit. Conversion from one unit to another in this case happening through base unit. On first step value will be converted to the base unit. On second step base value will be converted to result unit. `baseUnitId` might be picked up from [list of base units](#list-of-base-units). 

```
numi.addUnit({
    "id": "horse",
    "phrases": "horse, horses, hrs",
    "baseUnitId": "m",
    "format" : "hrs",
    "ratio" : 2.4,
});
```

### Custom Functions

Use `numi.addFunction` to add new function. Values passed into evaluated function in form of array. To use function with multiple arguments you can use `;` in Numi, like `myFunction(1;5;4)`.

```
numi.addFunction({ "id": "zum", "phrases": "zum" }, function(values) {
    return { "double": values[0].double + values[1].double };
});
```

### List of Base Units

| Unit name | Unit ID |
| --- | --- |
| Meter | m |
| Second | second |
| Percentage | percent |
| Square meter | m2 |
| Cubic meter | m3 |
| Bit | bit |
| Byte | byte |
| Radian | radian |
| Gram | gram |
| US Dollars | USD |


### Sample Extensions

- [Fluid ounces](fluid-ounce.js)




