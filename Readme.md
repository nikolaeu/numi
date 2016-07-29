## What is Numi

[Numi](http://numi.io) is a handy calculator app for Mac. It allows to describe tasks the natural way and instantly get an accurate answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`. Numi is not limited to simple calculations, it can solve expressions of any complexity, with parentheses, mathematical operations and high accuracy (up to 38 mantissa digits).

* **Units**. Numi supports currency, length, area, volume, time, temperature, css and data size conversion. It also allows to use dates in arithmetics.
* **Variables & tokens**. Numi allows to reuse calculations by using variables. By using special variables (tokens) like `sum` or `average`, it is possible to automatically calculate the sum or average value for all previous results
* **Percentages**. Numi allows to calculate not just a percent of a value, but different percentage situation, like `5% of what is 20 cm` or `15% on $20`
* **Time zones**. You can easily convert time between time zones and get current time in different locations like `Seoul time` or `now in Germany`.
* **Numeral systems**. It is possible to use numbers in binary, octal or hexadecimal form using appropriate prefix: `0b`, `0o` and `0x`. You can change output as well.
* **CSS**. You can make some CSS computations and conversions.
* **Math functions**. Numi support variety of math functions, like sin, cos, exponent, root, log, factorial, rounding and many others.

In order to extend Numi functionality you can use Numi plugin kit to develop and distribute your own plugins.

## Setting up plugin project in XCode

1. Create new XCode Bundle project: File → New → Project → (OS X) Framework & Library → Bundle
2. Download [Numi.framework](https://github.com/nikolaeu/NumiKit/releases) and drag it into project. Check copy items checkbox.
3. Add new script build phase in the build phases section of project to copy plugin into Numi plugins directory:

```
cp -r "${BUILT_PRODUCTS_DIR}/${EXECUTABLE_NAME}.bundle" ~/Library/Application\ Support/Numi/Plugins/
```

4. Add main plugin class, it should derive from `NumiPlugin` and contains setup function:

```swift
import Numi

class SampleNumiPlugin : NumiPlugin {
  override func setup(module: Numi) {
    NSLog("Plugin loaded")
    // put your plugin code here
  }
}
```

5. Set principal class in Info.plist. Use full class name (with module name): `SampleNumiPlugin.SampleNumiPlugin`
6. Archive your bundle project
7. Run Numi application. Your bundle should be loaded. To check, open Console application, and type "Numi" in search box. You should see some sort of "Plugin added: YOUR_PLUGIN_BUNDLE" message.

## Sample Numi Plugin

Project contains sample plugin with declaration of new constant, unit of measurement and new function. This plugin is aimed to demonstrate just basic stuff that can be done with NumiKit. Ensure you have copied [NumiKit](https://github.com/nikolaeu/NumiKit/releases) into project before compiling it.

