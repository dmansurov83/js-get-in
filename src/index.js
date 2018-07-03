const getIn = (obj, ...path) => {
    if (!obj) return obj;
    if (Array.isArray(path[0])) path = [...path[0]];
    if (!!obj.getIn) return obj.getIn(path);
    if (!path.length) return obj;
    const key = path.shift();
    return path.length ? getIn(obj[key], ...path) : obj[key];
};

export default getIn;