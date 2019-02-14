let UNITS = ['', 'kilo', 'Mega', 'Giga', 'Tera'];

let ratio = 1;
for (let unit of UNITS){
    let id = unit.substring(0,1) + "bps";
    let phrase1 = unit.substring(0,1) + "bps";
    let phrase2 = unit + "bits per second";
    let format = unit + "bits/s";
    numi.addUnit({
        "id": id,
        "phrases": phrase1 + ", " + phrase2,
        "baseUnitId": "second",
        "format" : format,
        "ratio" : ratio,
    });

    id = unit.substring(0,1) + "Bps";
    phrase1 = unit.substring(0,1) + "Bps";
    phrase2 = unit + "bytes per second";
    format = unit + "bytes/s";
    numi.addUnit({
        "id": id,
        "phrases": phrase1 + ", " + phrase2,
        "baseUnitId": "second",
        "format" : format,
        "ratio" : ratio * 8,
    });
    ratio = ratio * 1000;
}

// Almost the same, but for powers of 1024 (starting at kibibits)
UNITS = ['kibi', 'Mibi', 'Gibi', 'Tibi'];

ratio = 1024;
for (let unit of UNITS){
    let id = unit.substring(0,2) + "bps";
    let phrase1 = unit.substring(0,2) + "bps";
    let phrase2 = unit + "bits per second";
    let format = unit + "bits/s";
    numi.addUnit({
        "id": id,
        "phrases": phrase1 + ", " + phrase2,
        "baseUnitId": "second",
        "format" : format,
        "ratio" : ratio,
    });

    id = unit.substring(0,2) + "Bps";
    phrase1 = unit.substring(0,2) + "Bps";
    phrase2 = unit + "bytes per second";
    format = unit + "bytes/s";
    numi.addUnit({
        "id": id,
        "phrases": phrase1 + ", " + phrase2,
        "baseUnitId": "second",
        "format" : format,
        "ratio" : ratio * 8,
    });
    ratio = ratio * 1024;
}
