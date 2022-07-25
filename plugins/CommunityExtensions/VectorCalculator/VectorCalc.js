let vectorStore = [];

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

    const [u, v] = [vectorStore[values[0].double], vectorStore[values[1].double]];
    return {
        "double": Math.acos(dot(u, v) / (Math.sqrt(mag(u)) * Math.sqrt(mag(v)))),
        "unitId": "radian"
    }
});

numi.addFunction({ "id": "dot", "phrases": "dot" }, function (values) {
    if (values.length !== 2) {
        return;
    }

    const [u, v] = [vectorStore[values[0].double], vectorStore[values[1].double]];
    return v.length === u.length ? dot(u, v) : null;
});

numi.addFunction({ "id": "vec", "phrases": "vec" }, function (values) {
    if (values.length >= 2 && values.length <= 3) {             // allow only 2d,3d vectors
        const argVector = values.map((obj) => obj.double);

        let returnIndex = null;
        vectorStore.every((vector, vectorIndex) => {
            if (vector.length === argVector.length) {
                if (argVector.every((val, i) => val === vector[i])) {

                    returnIndex = vectorIndex;
                    return false;
                }
            }
            return true;
        });

        if (returnIndex === null) {
            return (vectorStore.push(argVector) - 1);
        }
        return returnIndex;
    }
    return;
});
