"use strict";
function make_shirt(size = "Large", printMessage = "I love Typescript") {
    console.log(`You have selected a '${size}' sized shirt with '${printMessage}' printed on it.`);
}
//calling function without modifying it
make_shirt();
//calling the function with diiferent size
make_shirt("Small");
//calling the function with different message and any size
make_shirt("Medium", "Keep Calm And Learn Typescript");
