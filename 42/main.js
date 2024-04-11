"use strict";
//make function
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
// declare array of magicians' names
let magician_names = ["Arham", "Harry Potter", "Arsalan", "Ashhad"];
//make another function to modify the array
function make_Great(magicians) {
    return magicians.map((magician) => `The Great ${magician}`);
}
//declare variable to store modified array
let magiciansOfPakistan = make_Great(magician_names);
//call the function to see modified list
show_magicians(magiciansOfPakistan);
