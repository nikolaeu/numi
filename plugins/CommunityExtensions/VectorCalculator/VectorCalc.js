let vectors = []

const mag = (vec) => {
    return vec.map((x) => x * x).reduce((m, n) => m + n);
};

const dot = (u, v) => {
    return u.map((x, i) => u[i] * v[i]).reduce((m, n) => m + n);
};

numi.addFunction({ "id": "angle", "phrases": "angle" }, function (values) {
    if (values.length !== 2) {
        return;
    }

    const [u, v] = [vectors[values[0].double], vectors[values[1].double]];
    return {
        "double": Math.acos(dot(u, v) / (Math.sqrt(mag(u)) * Math.sqrt(mag(v)))),
        "unitId": "radian"
    }
});

numi.addFunction({ "id": "dot", "phrases": "dot" }, function (values) {
    if (values.length !== 2) {
        return;
    }

    const [u, v] = [vectors[values[0].double], vectors[values[1].double]];
    return v.length === u.length ? dot(u, v) : null;
});

numi.addFunction({ "id": "vec", "phrases": "vec" }, function (values) {
    if (values.length >= 2) {
        const i = vectors.push(values.map((obj) => obj.double));
        return (i - 1);
    }
    return;
});
