let guestsList = ["Laiba", "Sobia", "Misbah", "Mahnoor", "Wardah", "Mehak", "Fatima"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestsList.length > 2) {let removedGuests = guestsList.pop();
console.log(`Sorry, ${removedGuests}, I can't invite you to dinner`)};
guestsList.forEach(guestList => {console.log(`Dear ${guestList}, You are still invited for dinner.`)});
guestsList.splice(0, guestsList.length);
console.log(guestsList); // Shows an empty list
