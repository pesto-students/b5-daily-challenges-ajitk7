function executePromise(promise) {
  return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
}

const anyPromise = (iterable) => executePromise(Promise.all([...iterable].map(executePromise)));

export { anyPromise };
