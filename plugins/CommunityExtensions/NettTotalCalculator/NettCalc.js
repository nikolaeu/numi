// Find nett of gross amount including tax

// Function to find the nett figure of a gross input amount
numi.addFunction({ "id" : "nett", "phrases" : "nett" }, function(values) {
    
    // Change this to whatever your tax amount is
    var vat = 20;
    
    return { "double": (values[0].double/(vat+100)) * 100 };

});

