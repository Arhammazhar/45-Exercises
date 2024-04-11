//make function

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}

// declare array of magicians' names

let magician_names = ["Arham","Harry Potter","Arsalan","Ashhad"];

//make another function to modify the array
function make_Great(magicians: string[]) {
  return magicians.map((magician) => `The Great ${magician}`);
}

//declare variable to make copy of magicians' names array

let namesOfMagicians = ["Arham","Harry Potter","Arsalan","Ashhad"];

//declare a variable to store value of make_Great function with copy array

let GreatMagicians = make_Great(namesOfMagicians);

// call show_magicians function with both arrays

show_magicians(magician_names);

show_magicians(GreatMagicians);