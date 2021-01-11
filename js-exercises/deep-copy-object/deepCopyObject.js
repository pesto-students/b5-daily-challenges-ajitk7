const isObject = obj => !Array.isArray(obj) && obj !== null && typeof obj === 'object';

const deepCopyObject = objToCopy => {
  if (!isObject(objToCopy)) {
    return objToCopy;
  }
  const result = {};
  Object.getOwnPropertyNames(objToCopy).forEach(key => {
    result[key] = deepCopyObject(objToCopy[key]);
  });
  return result;
};

export { deepCopyObject };
