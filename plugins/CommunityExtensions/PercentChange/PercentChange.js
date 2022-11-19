numi.addFunction({ "id": "pc", "phrases": "pc" }, (values) => {
    if (values.length !== 2) {
        return;
    }

    const [initial, final] = values.map(v => v.double);

    if(initial === 0) {
        return;
    }

    return { double: (final-initial)/initial*100, unitId: "percent" };
});