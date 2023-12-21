# Numi

[Numi](https://numi.app) is a handy calculator app for macOS. It allows you to describe tasks naturally and instantly get an answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`.

![](https://numi.app/images/numi-screenshot-yellow.png)

You can use Numi from command line on Linux and macOS or as a desktop app on macOS. The recommended way to install CLI version is using [Homebrew](https://brew.sh/):

`brew install nikolaeu/numi/numi-cli`

Desktop version for macOS version can be downloaded from the [app website](https://numi.app). You can also download the most recent CLI, desktop version and new Alfred extension manually from the [releases](https://github.com/nikolaeu/numi/releases/) page. _Note, there's no need to enable Alfred integration in app preferences with the new workflow (just make sure CLI version has been installed)._

CLI usage example (pass `-h` for more options):

`numi-cli "20 inches in cm"`

Most features of the Numi for macOS are supported in CLI. However, these are the features that **has not yet been implemented in CLI**:

-   Localization support
-   Timezone conversion
-   Dates
-   CSS
-   Variables
-   Tokens (sum, prev, avg)
-   Plugins/extension

## Documentation

-   [Unit Conversion](#unit-conversion)
-   [Time Zone Conversion](#time-zone-conversion)
-   [Operations](#operations)
-   [Numbers](#numbers)
-   [Currency](#currency)
-   [Percentage](#percentage)
-   [Scales](#scales)
-   [Variables](#variables)
-   [Constants](#constants)
-   [Functions](#functions)
-   [CSS](#css)
-   [Previous Result](#previous-result)
-   [Sum](#sum)
-   [Average](#average)
-   [SI prefixes](#si-prefixes)
-   [Date & Time](#date-time)
-   [Temperature](#temperature)
-   [Length](#length)
-   [Area](#area)
-   [Volume](#volume)
-   [Weight](#weight)
-   [Angular](#angular)
-   [Data](#data)
-   [Format](#format)
-   [Shortcuts](#shortcuts)
-   [Import & Export](#import-export)
-   [Alfred](#alfred)

### Unit Conversion

With `in (into, as, to)` you can convert one unit into another. Numi will automatically convert units to perform operations if it's needed during conversion.
$30 in Euro
$30 CAD + 5 USD - 7EUR

### Time Zone Conversion

Use `time` or `now` function to get time in your time zone. You can prefix this functions with time zone location (or use `in` with time zone suffix) to get current time for specified location. Results are always in sync with global time, so, at any point of time you will get the right time.

It's also possible to convert specific time or date from one time zone into another. Or calculate difference between time in different time zones:

    PST time
    New York time
    Time in Madrid
    2:30 pm HKT in Berlin

### Operations

You can use sign and word operators. Several expressions might be stacked together. Notice, expressions will be multiplied if used in parentheses one after another.

    8 times 9
    1 meter 20 cm = 120 cm
    6 (3) = 18

<table>
<thead><tr><th width="40%"> Operation </th> <th> Sample </th> </tr></thead>

<tr><td>Addition</td> <td>+, plus, and, with</td> </tr>
<tr><td>Subtraction</td> <td>-, minus, subtract, without</td> </tr>
<tr><td>Multiplication</td> <td>*, times, multiplied by, mul</td> </tr>
<tr><td>Division</td> <td>/, divide, divide by</td> </tr>
<tr><td>Exponent</td> <td>^</td> </tr>
<tr><td>Bitwise And</td> <td>&amp;</td> </tr>
<tr><td>Bitwise Or</td> <td>|</td> </tr>
<tr><td>Bitwise Xor</td> <td>xor</td> </tr>
<tr><td>Left Shift</td> <td>&lt;&lt;</td> </tr>
<tr><td>Right Shift</td> <td>&gt;&gt;</td> </tr>
<tr><td>Modulo</td> <td>mod</td> </tr>

</table>

### Numbers

Besides decimal numeral system, it is possible to use numbers in binary, octal or hexadecimal form using appropriate prefix: `0b`, `0o` and `0x`. You can use `sci` or `scientific` to format results in scientific notation.

    0b110111011
    0o1435343 in hex
    5 300 in sci

### Currency

You can use [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) codes for currency (like USD, RUB, CAD etc). You can also use common currency names and signs, like `$` for the US dollars, `roubles` for Russian roubles, or `€` for Euro. Numi updates currency rates several times a day using [open exchange rates](https://openexchangerates.org) service. Numi also supports a huge list of cryptocurrencies with hourly rates updates.

### Percentage

In addition to general percentage operations like adding or subtracting percent of value (`$10 - 40%`), you also can use additional operations :

<table>
<thead><tr><th width="60%"> Operation </th> <th> Example </th> </tr></thead>

<tr><td>Percentage value</td> <td>20% of $10</td> </tr>
<tr><td>Adding percentage</td> <td>5% on $30</td> </tr>
<tr><td>Subtracting percentage</td>  <td>6% off 40 EUR</td> </tr>

<tr><td>Percentage value of one value relative to another</td> <td>$50 as a % of $100</td> </tr>
<tr><td>Percentage addition of one value relative to another</td> <td>$70 as a % on $20</td> </tr>
<tr><td>Percentage subtraction of one value relative to another</td>  <td>$20 as a % off $70</td> </tr>

<tr><td>Value by percent part</td> <td>5% of what is 6 EUR</td> </tr>
<tr><td>Value by percent addition</td> <td>5% on what is 6 EUR</td> </tr>
<tr><td>Value by percent subtraction</td>  <td>5% off what is 6 EUR</td> </tr>

</table>

### Scales

Scales used for shorter form of writing big numbers. Please note that one-letter scales are case-sensitive, since `m` used for meters, and `K` used for Kelvins. Supported scales: thousands (`k`, `thousand`), millions (`M`, `million`), billions (`billion`).

    $2k
    2M eur

### Variables

You can declare variables and reuse them using the `=` operator. Please note some characters and keywords cannot be used as a variable. For example, `K` might be used as a temperature unit in Kelvin. Variable names should not contain whitespaces or special characters, and should not start with number:

    v = $20
    v2 = 5%
    v times 7 - v2
    v + $10

### Constants

<table>
<thead><tr><th width="60%"> Description </th> <th> Value </th> </tr></thead>

<tr><td>Pi</td> <td>3.1415926536</td> </tr>
<tr><td>E</td> <td>2.7182818285</td> </tr>

</table>

### Functions

By default trigonometrical functions uses parameters in radians.

<table>
<thead><tr><th width="60%"> Description </th> <th>Function</th> <th> Example </th> </tr></thead>

<tr><td>N-th root</td> <td>root</td> <td>root 2 (8)</td> </tr>
<tr><td>Square root</td> <td>sqrt</td> <td>sqrt 16</td> </tr>
<tr><td>Cubed root</td> <td>cbrt</td> <td>cbrt 8</td> </tr>
<tr><td>Absolute value</td> <td>abs</td> <td>abs(-4)</td> </tr>
<tr><td>Logarithm</td> <td>log</td> <td>log 2 (10)</td> </tr>
<tr><td>Natural logarithm</td> <td>ln</td> <td>ln 3</td> </tr>
<tr><td>Factorial</td> <td>fact</td> <td>fact 5</td> </tr>
<tr><td>Rounding</td> <td>round</td> <td>round 3.45</td> </tr>
<tr><td>Ceiling</td> <td>ceil</td> <td>ceil 3.76</td> </tr>
<tr><td>Flooring</td> <td>floor</td> <td>floor 2.56</td> </tr>
<tr><td>Sine</td> <td>sin</td> <td>sin 45°</td> </tr>
<tr><td>Cosine</td> <td>cos</td> <td>cos 3.45</td> </tr>
<tr><td>Tangent</td> <td>tan</td> <td>tan 8</td> </tr>
<tr><td>Arcsine</td> <td>arcsin</td> <td>arcsin 30</td> </tr>
<tr><td>Arccosine</td> <td>arccos</td> <td>arccos 85</td> </tr>
<tr><td>Arctangent</td> <td>arctan</td> <td>arctan 9</td> </tr>
<tr><td>Hyperbolic sine</td> <td>sinh</td> <td>sinh 3</td> </tr>
<tr><td>Hyperbolic cosine</td> <td>cosh</td> <td>cosh 9</td> </tr>
<tr><td>Hyperbolic tangent</td> <td>tanh</td> <td>tanh 11</td> </tr>
</table>

### CSS

Numi supports several CSS units: pixels (px), points (pt), em. Em is set to 16 px by default, but you can assign different value to it. Conversion from screen units to other length units performed using pixel per inch value (ppi). By default `ppi` is set to 96 pixels, which mean in every inch there're 96 pixels. You can set custom value for `ppi`.

    12 pt in px
    em = 20px
    1.2 em in px
    1 inch in px = 96 px
    ppi = 326
    1 cm in px = 128,35 px

### Previous Result

Use `prev` token to use result from previous line:

    Cost: $20 + 56 EUR
    Discounted: prev - 5% discount

### Sum

You can calculate sum of all lines above (until empty line) using `sum` ( `total` ) operator.

    Line 1: $10
    Line 2: $15
    Result: sum

### Average

You can calculate an average of all lines above (until empty line) using `average` ( `avg` ) operator.

    Line 1: $10
    Line 2: $20
    Result: average

### SI prefixes

SI-based units support all [SI prefixes](https://en.wikipedia.org/wiki/Metric_prefix), both short and long form. Note that SI prefixes are case-sensitive. For example, use `MB` for megabytes, not mB:

    1 mm
    2 picometers
    3 GB

### Date & Time

To make time calculations more straightforward, 1 year is equal to 365 days, and 1 month equal to 1/12 of the year. In cases where results give non-integer value, round functions might be used to make an integer. Supported units: Second, minute, hour, day, week, month, year. Use `fromunix` function to convert timestamp into dates.

    round(1 month in days)
    fromunix(1446587186)

### Temperature

Supported units: kelvin, celsius, fahrenheit

### Length

Supported units: meter, mil, points, lines, inch, hand, foot, yard, rod, chain, furlong, mile, cable, nautical mile, league. Note, since `in` used as a conversion operator, you cannot use it for inches.

### Area

Supported units: hectare, are, acre and all "squared" length units. Use `square` or `sq` prefix for this case.

    20 sq cm
    30 square inches
    11 sqm

### Volume

Supported units: Pint, quart, gallon, tea spoon, table spoon, cup. It is possible to use all length units with `cubic`, `cu` or `cb` prefix.

    20 cu cm
    30 cubic inches
    11 cbm

### Weight

Supported units: gram, tonne, carat, centner, pound, stone, ounce.

### Angular

Supported units: radians, degree. You can use both as text form of unit (radians, degrees) as sign. For example, 45 °

### Data

Bytes multiplies contain 1000 bytes. If you need 1024 multiplier, use [kibibytes](https://en.wikipedia.org/wiki/Kibibyte). Please note lowercase `b` is used for bits, and uppercase `B` for bytes.

### Format

Use hash symbol at the beginning of the line to make a header. If you want to comment part of the line, use double quotes. To comment all line, use double slash. Use colon to make a label (label will not be evaluated).

    # This is header
    $275 for the "Model 227"
    // This is comment
    Price: $11 + $34.45

### Shortcuts

<table>
<tr><td width="80%">Surround with parentheses</td> <td>⇧⌘0</td> </tr>
<tr><td>Copy result on current line</td> <td>⇧⌘C</td> </tr>
<tr><td>Select all</td> <td>⌘A</td> </tr>
<tr><td>Delete all</td> <td>⎇⌘⌫</td> </tr>
<tr><td>Copy all</td> <td>⎇⌘C</td> </tr>
<tr><td width="80%">Import</td> <td>⌘O</td> </tr>
<tr><td>Export</td> <td>⌘S</td> </tr>
<tr><td>Print</td> <td>⌘P</td> </tr>
</table>

### Import & Export

Numi does not modify imported files until you explicitly export them. All exported files have .numi extension. You can open .numi files with any text editor since Numi uses plain text and UTF-8 encoding to store files.

### Alfred

You can use Numi with [Alfred](https://alfredapp.com) for quick calculations. Just type `numi`, <kbd>n</kbd> or <kbd>=</kbd> in front of your expressions in Alfred. Please note, time zones functionality is not available via integration.

First you will need to install the [Numi workflow](https://github.com/nikolaeu/Numi/releases/download/mac-3.20.4/Numi.alfredworkflow), and enable Alfred integration in Numi preferences.

For the LaunchBar extension please refer to [https://github.com/Rahlir/NumiLaunchbar](https://github.com/Rahlir/NumiLaunchbar).

![gif](http://numi.app/gif/alfred.gif)

## Plugins

You can use JavaScript extensions to add global variables, custom units or functions. Right now only limited set of API is available via JavaScript, but the plan is to open as much API as possible.

Extension folder located in `~/Library/Application Support/com.dmitrynikolaev.numi/extensions` of your home folder. Open finder app, choose **Go** -> **Go to Folder** in menu (Or use shortcut `Cmd+Shift+G`) and type `~/Library/Application Support/com.dmitrynikolaev.numi/extensions` in destination. Press **Go** button and you'll navigate to the extension folder.

Use `~/Library/Application Support/com.nikolaeu.numi-setapp/extensions` for SetApp version.

Numi extension logs should be viewable via the `Console` application. Open Console app, type `NumiExtension` in the search bar, and choose `category` filter to focus on the extension logs.

-   [Logging](#logging)
-   [Values and Variables](#values-and-variables)
-   [Custom Units](#custom-units)
-   [Custom Functions](#custom-functions)
-   [List of Base Units](#list-of-base-units)
-   [Alfred integration](#alfred-integration)

### Logging

Use `log` function to send output from your extension to log window.

`js log("Function called!"); `

### Values and Variables

Each value in Numi might be represented in JavaScript as an object with a set of properties, describing decimal value, unit type etc. Here is the usual way of creating new values for Numi:

`js var value = { "double": 5, "unitId" : "USD" } `

Use `numi.setVariable` function to declare global variables.

`js numi.setVariable("xxx", { "double": 5, "unitId" : "USD" }); `

You can also use plain JavaScript numbers for cases when you'll need to return value for Numi. This will be treated as a value with decimal number.

`js numi.setVariable("yyy", 122); `

### Custom Units

Use `numi.addUnit` to add new unit. `id` field required for internal use, and might be any unique literal. `phrases` contains string with comma-separated phrases that might be used for the unit, `format` field used for results formatting.

Unit conversion limited to ratio-based conversion ATM. For each unit you can specify base unit identifier `baseUnitId` and `ratio` to that unit. Conversion from one unit to another in this case happening through base unit. On first step value will be converted to the base unit. On second step base value will be converted to result unit. `baseUnitId` might be picked up from [list of base units](#list-of-base-units).

`js numi.addUnit({ "id": "horse", "phrases": "horse, horses, hrs", "baseUnitId": "m", "format" : "hrs", "ratio" : 2.4, }); `

### Custom Functions

Use `numi.addFunction` to add new function. Values passed into evaluated function in form of array. To use function with multiple arguments you can use `;` in Numi, like `myFunction(1;5;4)`.

`js numi.addFunction({ "id": "zum", "phrases": "zum" }, function(values) { return { "double": values[0].double + values[1].double }; }); `

### List of Base Units

| Unit name    | Unit ID |
| ------------ | ------- |
| Meter        | m       |
| Second       | second  |
| Percentage   | percent |
| Square meter | m2      |
| Cubic meter  | m3      |
| Bit          | bit     |
| Byte         | byte    |
| Radian       | radian  |
| Gram         | gram    |
| US Dollars   | USD     |

### Sample Extensions

-   [Fluid ounces](https://github.com/nikolaeu/numi/blob/master/plugins/sample.js)
