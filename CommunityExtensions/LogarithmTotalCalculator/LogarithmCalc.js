numi.addFunction({ "id": "log", "phrases": "log" }, function(values) {
    if (values.length === 1) {
        return { "double": values[0].double ** 2 };
    } else if(values.length === 2 ) {
        return { "double": values[0].double ** values[1].double };
    }
    return { "double": values[0].double };
});