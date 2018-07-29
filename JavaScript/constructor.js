function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(" ")[1],
        speak: function() {
            console.log("my name is ", name);
        }
    };
}

let suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

let suspectsList = [];

suspects.forEach(function(suspect) {
    suspectsList.push(CreateSuspectObjects(suspect));
});