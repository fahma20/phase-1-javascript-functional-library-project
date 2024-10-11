function myEach(collection, callback) {
  const isArray = Array.isArray(collection);
  if (isArray) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection) === false) break; // Stop if callback returns false
    }
  } else {
    for (const key in collection) {
      if (callback(collection[key], key, collection) === false) break; // Stop if callback returns false
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (value, key) => {
    result.push(callback(value, key));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  let hasAcc = acc !== undefined;
  myEach(collection, (value, key) => {
    if (!hasAcc) {
      acc = value;
      hasAcc = true;
    } else {
      acc = callback(acc, value, collection);
    }
  });
  return acc;
}

function myFind(collection, predicate) {
  let result;
  myEach(collection, (value, key) => {
    if (predicate(value, key)) {
      result = value;
      return false; 
    }
  });
  return result;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, (value, key) => {
    if (predicate(value, key)) {
      result.push(value);
    }
  });
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}



function myFirst(array, n) {
  return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
  return n ? array.slice(-n) : array[array.length - 1];
}



function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
