let guestNames = ["Kamran Tessori","Allama Iqbal","Muhammad Ali Jinnah"];

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

let cantcome = guestNames[0];

console.log(`\n${cantcome} cannot make it to the dinner tonight, let's invite someone else.\n`);

guestNames.splice(0, 1, "Zia Khan");

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

console.log("\nI found a bigger dinner table. Now I can invite three more people!\n");

guestNames.unshift("Daniyal Nagori");

guestNames.push("Liaquat Ali Khan");

let middle: number = Math.floor(guestNames.length / 2);

guestNames.splice(middle, 0, "Ameen Alam");

guestNames.forEach(oneName => console.log(`${oneName} you are invited to dinner.`));

console.log("\nOh no! The new dinner table won't arrive in time for dinner, now I can invite only two people.\n");

while(guestNames.length > 2)
{
    let removed = guestNames.pop();
    console.log(`\nSorry ${removed}, I cannot invite you to the dinner.`);
}

guestNames.forEach(oneName => console.log(`\n${oneName} you are still invited to the dinner.`));

while(guestNames.length = 0)
{
    guestNames.pop()
}

console.log(guestNames);

