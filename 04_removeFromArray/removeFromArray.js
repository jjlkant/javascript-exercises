const removeFromArray = function(arr, ...elems) {
    for (var i = 0; i < elems.length; i++) {
        let index = arr.indexOf(elems[i]);
        if (index > -1) {
            arr.splice(index, 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
