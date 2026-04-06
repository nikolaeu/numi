// Timezone Conversion Extension
//
// ── Natural input (h:mm style) ───────────────────────────────────────────────
//   tconv(h; min; fromTz(); toTz())     — 24h  "15:30 CET to PST"
//   tconvpm(h; min; fromTz(); toTz())   — PM   "3:30 PM CET to IST"
//   tconvam(h; min; fromTz(); toTz())   — AM   "11:45 AM EST to JST"
//
// ── Decimal-hour style ───────────────────────────────────────────────────────
//   tzconv(time; fromTz(); toTz())      — decimal hours, e.g. 15.5 = 15:30
//   utcto(time; targetTz())             — UTC → local
//   toutc(time; sourceTz())             — local → UTC
//
// ── Output formatter ─────────────────────────────────────────────────────────
//   hm(decimalHours)                    — 6.5 → 6.30  (reads as 6:30)
//
// Examples:
//   tconv(15; 30; CET(); PST())         →  6.30  (15:30 CET  →  6:30 PST)
//   tconvpm(3; 30; CET(); IST())        →  19.0  (3:30 PM CET → 7:00 PM IST)
//   tconvam(11; 45; EST(); JST())       →  1.45  (11:45 AM EST → 1:45 AM JST)
//   hm(tzconv(15.5; CET(); PST()))      →  6.30
//
// Timezone functions return their UTC offset, so they compose freely:
//   PST() → -8,  CET() → 1,  IST() → 5.5,  JST() → 9 …
//
// Results wrap within [0, 24). DST is not accounted for.

// ─── Timezone dictionary ────────────────────────────────────────────────────
// Keys are the function name users call (e.g. PST()).
// Values are UTC offsets in decimal hours.

var TZ = {
    // ── Americas ──────────────────────────────────────────────────────────
    "HST":   -10,    // Hawaii-Aleutian Standard Time
    "AKST":  -9,     // Alaska Standard Time
    "AKDT":  -8,     // Alaska Daylight Time
    "PST":   -8,     // Pacific Standard Time          (Los Angeles, Vancouver)
    "PDT":   -7,     // Pacific Daylight Time
    "MST":   -7,     // Mountain Standard Time         (Denver, Phoenix)
    "MDT":   -6,     // Mountain Daylight Time
    "CST":   -6,     // Central Standard Time          (Chicago, Mexico City)
    "CDT":   -5,     // Central Daylight Time
    "EST":   -5,     // Eastern Standard Time          (New York, Toronto)
    "EDT":   -4,     // Eastern Daylight Time
    "AST":   -4,     // Atlantic Standard Time         (Halifax, San Juan)
    "ADT":   -3,     // Atlantic Daylight Time
    "NST":   -3.5,   // Newfoundland Standard Time
    "NDT":   -2.5,   // Newfoundland Daylight Time
    "ART":   -3,     // Argentina Time                 (Buenos Aires)
    "BRT":   -3,     // Brasilia Time                  (São Paulo, Rio)
    "UYT":   -3,     // Uruguay Time
    "CLT":   -4,     // Chile Standard Time
    "PYT":   -4,     // Paraguay Time
    "VET":   -4,     // Venezuelan Standard Time
    "BOT":   -4,     // Bolivia Time
    "PET":   -5,     // Peru Time                      (Lima)
    "COT":   -5,     // Colombia Time                  (Bogotá)
    "ECT":   -5,     // Ecuador Time

    // ── UTC / Europe / Africa ──────────────────────────────────────────────
    "UTC":    0,     // Coordinated Universal Time
    "GMT":    0,     // Greenwich Mean Time
    "WET":    0,     // Western European Time          (Lisbon, Reykjavik)
    "WEST":   1,     // Western European Summer Time
    "WAT":    1,     // West Africa Time               (Lagos, Kinshasa)
    "CET":    1,     // Central European Time          (Paris, Berlin, Rome)
    "CEST":   2,     // Central European Summer Time
    "CAT":    2,     // Central Africa Time            (Johannesburg, Harare)
    "SAST":   2,     // South Africa Standard Time
    "EET":    2,     // Eastern European Time          (Athens, Cairo, Kyiv)
    "EEST":   3,     // Eastern European Summer Time
    "EAT":    3,     // East Africa Time               (Nairobi, Addis Ababa)

    // ── Middle East / Russia ───────────────────────────────────────────────
    "TRT":    3,     // Turkey Time                    (Istanbul)
    "AST_AR": 3,     // Arabia Standard Time           (Riyadh, Baghdad)
    "MSK":    3,     // Moscow Standard Time
    "IRST":   3.5,   // Iran Standard Time             (Tehran)
    "IRDT":   4.5,   // Iran Daylight Time
    "GST":    4,     // Gulf Standard Time             (Dubai, Abu Dhabi)
    "AZT":    4,     // Azerbaijan Time
    "GET":    4,     // Georgia Standard Time          (Tbilisi)
    "AFT":    4.5,   // Afghanistan Time               (Kabul)
    "PKT":    5,     // Pakistan Standard Time         (Karachi, Islamabad)
    "UZT":    5,     // Uzbekistan Time
    "IST":    5.5,   // India Standard Time            (Mumbai, Delhi)
    "NPT":    5.75,  // Nepal Time                     (Kathmandu)

    // ── Asia / Pacific ────────────────────────────────────────────────────
    "BDT":    6,     // Bangladesh Standard Time       (Dhaka)
    "BTT":    6,     // Bhutan Time
    "OMST":   6,     // Omsk Time
    "MMT":    6.5,   // Myanmar Time                   (Yangon)
    "ICT":    7,     // Indochina Time                 (Bangkok, Hanoi)
    "WIB":    7,     // Western Indonesian Time        (Jakarta)
    "KRAT":   7,     // Krasnoyarsk Time
    "SGT":    8,     // Singapore Standard Time
    "HKT":    8,     // Hong Kong Time
    "CST_CN": 8,     // China Standard Time            (Beijing, Shanghai)
    "PHT":    8,     // Philippine Time                (Manila)
    "MYT":    8,     // Malaysia Time                  (Kuala Lumpur)
    "WITA":   8,     // Central Indonesian Time        (Bali, Makassar)
    "AWST":   8,     // Australian Western Standard Time (Perth)
    "JST":    9,     // Japan Standard Time            (Tokyo, Osaka)
    "KST":    9,     // Korea Standard Time            (Seoul)
    "WIT":    9,     // Eastern Indonesian Time
    "ACST":   9.5,   // Australian Central Standard Time (Darwin, Adelaide)
    "ACDT":   10.5,  // Australian Central Daylight Time
    "AEST":   10,    // Australian Eastern Standard Time (Sydney, Melbourne)
    "AEDT":   11,    // Australian Eastern Daylight Time
    "SBT":    11,    // Solomon Islands Time
    "NZST":   12,    // New Zealand Standard Time      (Auckland)
    "FJST":   12,    // Fiji Standard Time
    "NZDT":   13,    // New Zealand Daylight Time
};

// ─── Register each timezone as a zero-argument function ─────────────────────

Object.keys(TZ).forEach(function(name) {
    var offset = TZ[name];
    numi.addFunction({
        "id": name,
        "phrases": name + ", " + name.toLowerCase()
    }, function() {
        return { "double": offset };
    });
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function _wrapHours(h) {
    return ((h % 24) + 24) % 24;
}

// Convert decimal hours to HH.MM notation (6.5 → 6.30, 17.75 → 17.45)
function _toHHMM(decimalHours) {
    var wrapped = _wrapHours(decimalHours);
    var h = Math.floor(wrapped);
    var m = Math.round((wrapped - h) * 60);
    if (m === 60) { h += 1; m = 0; }   // handle rounding edge
    return h + m / 100;
}

// ─── Natural h:mm input functions ────────────────────────────────────────────

// tconv(h; min; fromTz(); toTz())  — 24h clock: "15:30 CET to PST"
numi.addFunction({
    "id": "tconv",
    "phrases": "tconv, t conv, time conv"
}, function(values) {
    if (values.length !== 4) return;
    var decimal = values[0].double + values[1].double / 60;
    return { "double": _toHHMM(decimal - values[2].double + values[3].double) };
});

// tconvpm(h; min; fromTz(); toTz())  — 12h PM clock: "3:30 PM CET to IST"
numi.addFunction({
    "id": "tconvpm",
    "phrases": "tconvpm, t conv pm, time conv pm"
}, function(values) {
    if (values.length !== 4) return;
    var h = values[0].double;
    var hours24 = (h === 12) ? 12 : h + 12;   // 12 PM = noon, 1 PM = 13, …
    var decimal = hours24 + values[1].double / 60;
    return { "double": _toHHMM(decimal - values[2].double + values[3].double) };
});

// tconvam(h; min; fromTz(); toTz())  — 12h AM clock: "11:45 AM EST to JST"
numi.addFunction({
    "id": "tconvam",
    "phrases": "tconvam, t conv am, time conv am"
}, function(values) {
    if (values.length !== 4) return;
    var h = values[0].double;
    var hours24 = (h === 12) ? 0 : h;          // 12 AM = midnight, 1 AM = 1, …
    var decimal = hours24 + values[1].double / 60;
    return { "double": _toHHMM(decimal - values[2].double + values[3].double) };
});

// ─── Output formatter ─────────────────────────────────────────────────────────

// hm(decimalHours) — convert decimal result to readable HH.MM (6.5 → 6.30)
numi.addFunction({
    "id": "hm",
    "phrases": "hm, as hm, to hm"
}, function(values) {
    if (values.length !== 1) return;
    return { "double": _toHHMM(values[0].double) };
});

// ─── Decimal-hour conversion functions ───────────────────────────────────────

// tzconv(time; fromTz(); toTz())
numi.addFunction({
    "id": "tzconv",
    "phrases": "tzconv, tz conv, timezone convert, tz convert"
}, function(values) {
    if (values.length !== 3) return;
    return { "double": _wrapHours(values[0].double - values[1].double + values[2].double) };
});

// utcto(time; targetTz())
numi.addFunction({
    "id": "utcto",
    "phrases": "utcto, utc to, from utc"
}, function(values) {
    if (values.length !== 2) return;
    return { "double": _wrapHours(values[0].double + values[1].double) };
});

// toutc(time; sourceTz())
numi.addFunction({
    "id": "toutc",
    "phrases": "toutc, to utc, to UTC"
}, function(values) {
    if (values.length !== 2) return;
    return { "double": _wrapHours(values[0].double - values[1].double) };
});
