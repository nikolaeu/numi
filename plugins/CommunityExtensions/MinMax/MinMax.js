numi.addFunction({ "id": "nmin", "phrases": "nmin" }, function(values) {
	return { "double": Math.min(...values.map(value => value.double)) };
});

numi.addFunction({ "id": "nmax", "phrases": "nmax" }, function(values) {
	return { "double": Math.max(...values.map(value => value.double)) };
});
