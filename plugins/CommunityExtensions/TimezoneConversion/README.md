# Timezone Conversion

Convert times between timezones with natural h:mm input and readable output.

---

## Quick reference

| What you want to express    | How to write it                        |
|-----------------------------|----------------------------------------|
| `15:30 CET to PST`          | `tconv(15; 30; CET(); PST())`          |
| `3:30 PM CET to IST`        | `tconvpm(3; 30; CET(); IST())`         |
| `11:45 AM EST to JST`       | `tconvam(11; 45; EST(); JST())`        |
| `20:00 UTC to JST`          | `tconv(20; 0; UTC(); JST())`           |
| Decimal hours               | `tzconv(15.5; CET(); PST())`           |
| Local time → UTC            | `toutc(15; PST())`                     |
| UTC → local                 | `utcto(20; JST())`                     |

**Output** is in decimal 24h hours (e.g. `6.5` = 6:30).  
Wrap it in `hm()` for a cleaner `HH.MM` read: `hm(tconv(15; 30; CET(); PST()))` → `6.30`.

---

## Functions

### `tconv(h; min; fromTz(); toTz())` — 24-hour clock
```
tconv(15; 30; CET(); PST())      →  6.30   (15:30 CET  →  6:30 AM PST)
tconv(9;  0;  JST(); EST())      →  19.0   (9:00 AM JST → 7:00 PM EST)
tconv(20; 0;  UTC(); IST())      →  1.30   (20:00 UTC  →  1:30 AM IST)
```

### `tconvpm(h; min; fromTz(); toTz())` — 12-hour PM
12 PM = noon, 1 PM = 13:00, … 11 PM = 23:00
```
tconvpm(3; 30; CET(); IST())     →  19.0   (3:30 PM CET → 7:00 PM IST)
tconvpm(12; 0; EST(); GMT())     →  17.0   (12:00 PM EST → 5:00 PM GMT)
```

### `tconvam(h; min; fromTz(); toTz())` — 12-hour AM
12 AM = midnight, 1 AM = 1:00, … 11 AM = 11:00
```
tconvam(11; 45; EST(); JST())    →  1.45   (11:45 AM EST → 1:45 AM JST)
tconvam(12; 0;  PST(); UTC())    →  8.0    (12:00 AM PST → 8:00 AM UTC)
```

### `hm(decimalHours)` — output formatter
Converts a decimal result into readable `HH.MM` notation.
```
hm(6.5)                          →  6.30
hm(17.75)                        →  17.45
hm(tconv(15; 30; CET(); PST()))  →  6.30
```

### `tzconv(time; fromTz(); toTz())` — decimal hours input
```
tzconv(15.5; CET(); PST())       →  6.5    (15:30 CET → 6:30 PST)
```

### `utcto(time; targetTz())` — UTC → local (decimal)
```
utcto(20; JST())                 →  5.0    (20:00 UTC → 5:00 AM JST)
```

### `toutc(time; sourceTz())` — local → UTC (decimal)
```
toutc(15; PST())                 →  23.0   (3:00 PM PST → 11:00 PM UTC)
```

---

## Timezone dictionary

Timezone functions return their UTC offset. Use any of them in the functions above.

### Americas

| Call        | Name                          | UTC    |
|-------------|-------------------------------|--------|
| `HST()`     | Hawaii-Aleutian Standard Time | −10    |
| `AKST()`    | Alaska Standard Time          | −9     |
| `AKDT()`    | Alaska Daylight Time          | −8     |
| `PST()`     | Pacific Standard Time         | −8     |
| `PDT()`     | Pacific Daylight Time         | −7     |
| `MST()`     | Mountain Standard Time        | −7     |
| `MDT()`     | Mountain Daylight Time        | −6     |
| `CST()`     | Central Standard Time         | −6     |
| `CDT()`     | Central Daylight Time         | −5     |
| `EST()`     | Eastern Standard Time         | −5     |
| `EDT()`     | Eastern Daylight Time         | −4     |
| `AST()`     | Atlantic Standard Time        | −4     |
| `ADT()`     | Atlantic Daylight Time        | −3     |
| `NST()`     | Newfoundland Standard Time    | −3.5   |
| `NDT()`     | Newfoundland Daylight Time    | −2.5   |
| `ART()`     | Argentina Time                | −3     |
| `BRT()`     | Brasilia Time                 | −3     |
| `UYT()`     | Uruguay Time                  | −3     |
| `CLT()`     | Chile Standard Time           | −4     |
| `PYT()`     | Paraguay Time                 | −4     |
| `VET()`     | Venezuelan Standard Time      | −4     |
| `BOT()`     | Bolivia Time                  | −4     |
| `PET()`     | Peru Time                     | −5     |
| `COT()`     | Colombia Time                 | −5     |
| `ECT()`     | Ecuador Time                  | −5     |

### Europe / Africa

| Call        | Name                          | UTC    |
|-------------|-------------------------------|--------|
| `UTC()`     | Coordinated Universal Time    | 0      |
| `GMT()`     | Greenwich Mean Time           | 0      |
| `WET()`     | Western European Time         | 0      |
| `WEST()`    | Western European Summer Time  | +1     |
| `WAT()`     | West Africa Time              | +1     |
| `CET()`     | Central European Time         | +1     |
| `CEST()`    | Central European Summer Time  | +2     |
| `CAT()`     | Central Africa Time           | +2     |
| `SAST()`    | South Africa Standard Time    | +2     |
| `EET()`     | Eastern European Time         | +2     |
| `EEST()`    | Eastern European Summer Time  | +3     |
| `EAT()`     | East Africa Time              | +3     |

### Middle East / Russia

| Call         | Name                      | UTC    |
|--------------|---------------------------|--------|
| `TRT()`      | Turkey Time               | +3     |
| `AST_AR()`   | Arabia Standard Time      | +3     |
| `MSK()`      | Moscow Standard Time      | +3     |
| `IRST()`     | Iran Standard Time        | +3.5   |
| `IRDT()`     | Iran Daylight Time        | +4.5   |
| `GST()`      | Gulf Standard Time        | +4     |
| `AZT()`      | Azerbaijan Time           | +4     |
| `GET()`      | Georgia Standard Time     | +4     |
| `AFT()`      | Afghanistan Time          | +4.5   |
| `PKT()`      | Pakistan Standard Time    | +5     |
| `UZT()`      | Uzbekistan Time           | +5     |
| `IST()`      | India Standard Time       | +5.5   |
| `NPT()`      | Nepal Time                | +5.75  |

### Asia / Pacific

| Call         | Name                               | UTC    |
|--------------|------------------------------------|--------|
| `BDT()`      | Bangladesh Standard Time           | +6     |
| `BTT()`      | Bhutan Time                        | +6     |
| `OMST()`     | Omsk Time                          | +6     |
| `MMT()`      | Myanmar Time                       | +6.5   |
| `ICT()`      | Indochina Time                     | +7     |
| `WIB()`      | Western Indonesian Time            | +7     |
| `KRAT()`     | Krasnoyarsk Time                   | +7     |
| `SGT()`      | Singapore Standard Time            | +8     |
| `HKT()`      | Hong Kong Time                     | +8     |
| `CST_CN()`   | China Standard Time                | +8     |
| `PHT()`      | Philippine Time                    | +8     |
| `MYT()`      | Malaysia Time                      | +8     |
| `WITA()`     | Central Indonesian Time            | +8     |
| `AWST()`     | Australian Western Standard Time   | +8     |
| `JST()`      | Japan Standard Time                | +9     |
| `KST()`      | Korea Standard Time                | +9     |
| `WIT()`      | Eastern Indonesian Time            | +9     |
| `ACST()`     | Australian Central Standard Time   | +9.5   |
| `ACDT()`     | Australian Central Daylight Time   | +10.5  |
| `AEST()`     | Australian Eastern Standard Time   | +10    |
| `AEDT()`     | Australian Eastern Daylight Time   | +11    |
| `SBT()`      | Solomon Islands Time               | +11    |
| `NZST()`     | New Zealand Standard Time          | +12    |
| `FJST()`     | Fiji Standard Time                 | +12    |
| `NZDT()`     | New Zealand Daylight Time          | +13    |

---

> DST is not accounted for — use the DST variant of the timezone explicitly (e.g. `CEST()` instead of `CET()` in summer).
