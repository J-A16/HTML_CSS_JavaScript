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

_.map = function(list, callback) {
    let arr = [];

    _.each(list, function(v, i, list) {
        arr.push(callback(v, i, list));
    });

    return arr;
};

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item) {
    return `broken ${item}`;
};

let arr = _.map(weapons, makeBroken);

console.log(arr);