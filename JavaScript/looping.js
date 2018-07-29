let game = {
    suspects: [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};

for (let suspect in game.suspects) {
    for (let property in game.suspects[suspect]) {
        console.log(game.suspects[suspect][property]);
    }
}

game.suspects.forEach(function(suspect) {
    console.log("outer loop");
    for (let property in suspect) {
        console.log("inner loop");
        if (property === "name") {
            if (suspect[property] === "Rusty") {
                console.log("that's him");
            } else {
                console.log("that's not him");
            }
        }
    }
});