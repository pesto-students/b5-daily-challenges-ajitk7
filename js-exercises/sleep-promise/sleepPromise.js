const sleep = ms => {
  if (Number.isNaN(ms)) {
    throw new Error(`Expected Number: Found ${typeof ms}`);
  }

  return new Promise(resolve => Promise.resolve(ms).then(setTimeout(resolve, ms)));
};

export { sleep };
