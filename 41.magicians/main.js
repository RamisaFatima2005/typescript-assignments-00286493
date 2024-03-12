"use strict";
// function show_magicians(magicians_name: string[]): void {
//     for (const magician_name of magicians_name){
//         console.log(magician_name.charAt(0).toUpperCase() + magician_name.slice(1));
//     }
// }
// const magician_name:string[] = ["Ali", "Hamza", "Bilal"];
// show_magicians(magician_name)
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magician(magicians);
