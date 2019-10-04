// Calculate standard deviation of dataset

var sum = function (arr) {
	return arr.reduce(function (v, acc) {return acc + v;}, 0);
};

var average = function (arr) {
	return sum(arr) / arr.length;
};

var squaredDist = function (a, b) {
	return Math.pow(a - b, 2);
};

var variance = function (arr) {
	var mean = average(arr);

	return average(arr.map(function (v) {return squaredDist(v, mean);}));
};

numi.addFunction({ "id": "stddev", "phrases": "stddev, sd" }, function(values) {
	return { "double": Math.sqrt(variance(values.map(function (v) {return v.double;}))) };
});
