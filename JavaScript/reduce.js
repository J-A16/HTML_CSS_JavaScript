const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let _ = {};

_.each = (list, callback) => {
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

_.reduce = (list, callback, result) => {

    _.each(list, function(v, key, list){
        result = callback(result, v, key, list);
    })

    return result;
}

_.reduce(newDevelopment, (result, person) => {
    if(result === undefined){
        result = [];
        for(room in person.rooms){
            for(name in person.rooms[room]){
                result.push(name);
            }
        }
    }

    for(room in person.rooms){
        for(name in person.rooms[room]){
            if(person.rooms[room][name]){
                index = result.indexOf(name);
                result = result.slice(0, index).concat(result.slice(index + 1, result.length));
            }
        }
    }

    return result;
});