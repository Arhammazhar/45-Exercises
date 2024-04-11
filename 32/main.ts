let current_users = ["Arham", "Hiba", "Jack", "Paul", "Eric"];

let new_users = ["Usman", "Jahangir", "Arham", "Hiba", "Paul"];

new_users.forEach((username) => {
  if (current_users.includes(username)) {
    console.log(`The username '${username}' is already taken.`);
  } else {
    console.log(`The username '${username}' is available.`);
  }
});
