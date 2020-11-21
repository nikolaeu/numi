numi.addFunction({
	"id": "clamp",
	"phrases": "clamp"
}, function (values) {
	return {
		"double": values[0].double > values[2].double ? values[2].double : (values[0].double < values[1].double ? values[1].double : values[0].double)
	};
});