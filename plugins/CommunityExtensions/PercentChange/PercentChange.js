numi.addFunction({ "id": "pc", "phrases": "pc" }, (values) => {
    if (values.length !== 2) {
        return;
    }

    const [initial, final] = values.map(v => v.double);

    return { double: (final-initial)/initial*100, unitId: "percent" };
});