let guestNames = ["Kamran Tessori","Allama Iqbal","Muhammad Ali Jinnah"];

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

console.log("\nKamran Tessori cannot make it to the dinner tonight, let's invite someone else.\n");

guestNames.splice(0, 1, "Zia Khan");

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));