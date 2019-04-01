import { assoc, keys, reduce, curry } from 'ramda';

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
);

export default renameKeys;
