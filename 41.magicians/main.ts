let magicians : string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function show_magician(magician: string[]){
    magician.forEach(element => {
        console.log(element);
    });
}

show_magician(magicians)