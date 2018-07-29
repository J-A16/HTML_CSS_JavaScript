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

let _ = {};
_.each = function(list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (key in list) {
            callback(list[key], key, list);
        }
    }
};

_.each(suspects, function(suspect) {
    suspectsList.push(CreateSuspectObjects(suspect));
});

console.log(suspectsList);