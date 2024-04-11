"use strict";
let nos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nos.forEach((no) => {
    if (no == 1) {
        console.log(`${no}st`);
    }
    else if (no == 2) {
        console.log(`${no}nd`);
    }
    else if (no == 3) {
        console.log(`${no}rd`);
    }
    else {
        console.log(`${no}th`);
    }
});
