let guestsList = ["Ramisa", "Misbah", "Wardah", "Mehak"];
let dontCome = guestsList [0];
console.log(`${dontCome} can't come`);
guestsList.splice(0, 1, "Sobia");
guestsList.forEach(guestList => console.log(`Assalam o Alaikum ${guestList}, I would like to invite you to dinner`));