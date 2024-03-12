"use strict";
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " The Great";
    }
    ;
}
make_great(magicians);
show_magician(magicians);
