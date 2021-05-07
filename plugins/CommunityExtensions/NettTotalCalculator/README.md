# Find a Nett Total of a Gross Amount (including tax) Extension for Numi

## What is this extension for? :mag_right:

This extension allows you to easily calculate a nett figure from a gross amount. For example, if you are doing your accounts and a supplier has sent an invoice with just a gross figure, you can quickly calculate the nett figure for your accounts. I know this is easy to do on a calculator but it's annoying!

## Installation :floppy_disk:

Simply download the .js file to your numi extensions directory.


## How to use it :wrench:

```
nett(100) // 83.33
nett(50) // 41.67
nett(187.50) // 156.25
nett(12.1;21) // 10
```

You can set your default VAT amount in the extension file by editing the line:

`var vat = values[1]?.double ?? 20`

The terminology described above can be used with first letter capital or not. 

## Example :memo:
![extensionDemonstration](SS.png)
