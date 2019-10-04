# Data rates

## What is this extension for? :mag_right:

This extension adds support for computer data rates, such as used to describe network traffic.

It supports both [SI units](https://en.wikipedia.org/wiki/International_System_of_Units) (powers of ten) like kilobyte and [binary units](https://en.wikipedia.org/wiki/Binary_prefix) (powers of two) like kibibyte, as well as bits and bytes.

## Installation :floppy_disk:

Simply download the .js file to your Numi extensions directory.

## How to use it :wrench:

Combine any two of the following:

| Prefix | Symbol | Notes |
| ---- | ------ | ----- |
| SI | k, M, G, T | power of 1000 |
| Binary | ki, Mi, Gi, Ti | power of 1024 |

| Unit | Symbol | Notes |
| ---- | ------ | ----- |
| Bytes per second | Bps | upper case |
| Bits per second | bps | upper case |

For example, SI prefix `k` and bytes-per-second unit `Bps` makes `kBps` (note the case!).


## Example :memo:

```
# What's the fastest my home broadband can download a file?
96 Mbps in MBps = 12 Megabytes/s

# How long is that going to take?
filesize = 3 TiB = 3 TiB
rate = 2MBps = 2 Megabytes/s
time = (filesize / (rate in TiBps)) as seconds = 1,649,267.44 s
time in days = 19 day 2 h 7 min 47 s
```
