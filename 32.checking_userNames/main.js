"use strict";
let current_users = ["Misbah", "wardah", "Sobia", "Mehak", "Laiba"];
let new_users = ["Ramisa", "Ayesha", "Mahnoor", "Misbah", "Wardah"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`this Username ${new_one_user} is available`);
    }
});
