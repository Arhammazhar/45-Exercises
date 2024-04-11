let usernames: string[] = [
  "Arham",
  "Ashhad",
  "Admin",
  "Arsalan",
  "Khalil",
  "Parvez",
];

usernames.forEach((onename) => {
  if (onename == "Admin") {
    console.log(`Hello ${onename}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${onename}, thank you for logging in again.`);
  }
});
