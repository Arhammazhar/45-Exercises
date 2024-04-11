let countries: string[] = ["USA","Denmark","Indonesia","Saudi Arabia","Turkey"];

console.log("Original Order:",countries);

console.log("Alphabetical Order Without Changing Actual Array:",[...countries].sort());

console.log("Still in Original Order",countries);

console.log("Reverse Alphabetical Order Without Changing Actual Array:",[...countries].sort().reverse());

console.log("Still in Original Order:",countries);

console.log("Reverse Order:",countries.reverse());

console.log("Back to Orignal Order:",countries.reverse());

console.log("Alphabetical Order:",countries.sort());

console.log("Reverse Alphabetical Order:",countries.sort().reverse());