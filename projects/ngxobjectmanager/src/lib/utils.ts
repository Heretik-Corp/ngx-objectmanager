export function toCamel(o) {
    let newO, origKey, newKey, value;
    if (o instanceof Array) {
        return o.map((v) => {
            if (typeof v === 'object') {
                v = toCamel(v);
            }
            return v;
        });
    } else {
        newO = {};
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
                newKey = newKey.replace(new RegExp('ID$'), 'Id');
                value = o[origKey];
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = toCamel(value);
                }
                newO[newKey] = value;
            }
        }
    }
    return newO;
}
