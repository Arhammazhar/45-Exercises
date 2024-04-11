let guestNames = ["Kamran Tessori","Allama Iqbal","Muhammad Ali Jinnah"];

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

console.log("\nKamran Tessori cannot make it to the dinner tonight, let's invite someone else.\n");

guestNames.splice(0, 1, "Zia Khan");

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

console.log("\nI found a bigger dinner table. Now I can invite three more people!\n");

guestNames.unshift("Daniyal Nagori");

guestNames.push("Liaquat Ali Khan");

let middle: number = Math.floor(guestNames.length / 2);

guestNames.splice(middle, 0, "Ameen Alam");

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));


