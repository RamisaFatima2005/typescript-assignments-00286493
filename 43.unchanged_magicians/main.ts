let magicians : string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function show_magician(magician: string[],magician_copy: string[]){
    magician.forEach(element => {
        console.log(element);
    });
    magician_copy.forEach(element => {
        console.log(element);
    });
}
function make_great(magician: string[]) :string[] {
        var magician_copy =[];
        for(let i = 0; i < magician.length;i++){
            magician_copy.push(magician[i] + "The Great");
        }
        return magician_copy;
    }


let magician_copy =make_great(magicians)
show_magician(magicians,magician_copy);