"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getIn = function getIn(obj) {
    for (var _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        path[_key - 1] = arguments[_key];
    }

    if (!obj) return obj;
    if (Array.isArray(path[0])) path = [].concat(_toConsumableArray(path[0]));
    if (!!obj.getIn) return obj.getIn(path);
    if (!path.length) return obj;
    var key = path.shift();
    return path.length ? getIn.apply(undefined, [obj[key]].concat(_toConsumableArray(path))) : obj[key];
};

exports.default = getIn;