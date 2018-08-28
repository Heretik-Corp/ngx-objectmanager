export function toCamel(o) {
  let newO;
  if (o instanceof Array) {
    return o.map(v => {
      if (typeof v === 'object') {
        v = toCamel(v);
      }
      return v;
    });
  } else {
    newO = {};
    for (const origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        const newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
        let value = o[origKey];
        if (value instanceof Array || (value !== null && value.constructor === Object)) {
          value = toCamel(value);
        }
        newO[newKey] = value;
      }
    }
  }
  return newO;
}
