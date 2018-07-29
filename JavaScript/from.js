let _ = {};

// Creates array from array like object
_.from = arr => {
    return Array.prototype.slice.call(arr);
};