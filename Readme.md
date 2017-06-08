## What is Numi

[Numi](http://numi.io) is a handy calculator app for Mac. It allows to describe tasks the natural way and instantly get an accurate answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`. 

You can use JavaScript extensions to add global variables, custom units or functions. Numi loads your extension on the fly. In case of any errors, they will be printed in extensions log control in preferences. You might notice default extension with commented code in extensions folder. Feel free to modify it, or play with it. Delete this file to reset it contents to default.

Numi supports JavaScript extensions since `3.17`. Right now only limited set of API is available via JavaScript, but the plan is to open as mach API as possible. To start using test version with JavaScript extensions, you'll need to switch to test update stream. In terminal:

```
defaults write com.dmitrynikolaev.numi SUUpdaterIsInTestMode 'YES'
```

And check for app updates.



## Values

Each value in Numi represented as an JavaScript object with a set of properties. Any properties are optional. Here is the usual way of creating values:

```
var value = { "double": 5, "unitId" : "USD" }
```


## Global Variables

Use `numi.setVariable` function do declare global variable. 

```
numi.setVariable("xxx", { "double": 5, "unitId" : "USD" });
```

## Custom Units

Use `numi.addUnit` to add new unit. Right now custom units limited to units with ratio-based conversion. `id` field required for internal use, and might be any unique literal for new unit. `baseUnitId` might be picked up from [units list](#units-list) section. 

```
numi.addUnit({
    "id": "horse",
    "phrases": "horse, horses, hrs",
    "baseUnitId": "m",
    "format" : "hrs",
    "ratio" : 2.4,
});
```

## Custom Functions

Use `numi.addFunction` to add new function. Note, values passed into evaluated function in form of array. You might need to check values attributes before making any computations.

To use function with multiple arguments you can use `;` in Numi, like `myFunction(1;5;4)`.

```
numi.addFunction({
    "id": "zum",
    "phrases": "zum",
    "function" : function(values) {
        return {
            "double": values[0].double + values[1].double,
        };
    }
});
```

## Units List

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





