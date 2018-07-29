const videoData = [
    {
        name: "Miss Scarlet",
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    },
    {
        name: "Mrs. White",
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    },
    {
        name: "Reverend Green",
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    },
    {
        name: "Rusty",
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    },
    {
        name: "Colonel Mustard",
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    },
    {
        name: "Professor Plum",
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { "dining room": false },
            { "billiard room": false },
            { library: false }
        ]
    }
];

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

_.filter = function(list, callback) {
    let arr = [];

    _.each(list, function(v, i, list) {
        if (callback(v, i, list)) {
            arr.push(v);
        }
    });

    return arr;
};

_.map = function(list, callback) {
    let arr = [];

    _.each(list, function(v, i, list) {
        arr.push(callback(v, i, list));
    });

    return arr;
};

let arr = _.filter(videoData, function(person) {
    return person.present;
});

arr = _.map(arr, function(person) {
    return person.name;
});

console.log(arr);