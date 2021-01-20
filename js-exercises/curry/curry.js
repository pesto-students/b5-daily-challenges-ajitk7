const curry = (fn) => function curried(...args) {
  return (args.length >= fn.length) ? fn(...args) : (..._args) => curried(...args, ..._args);
};
export {
  curry,
};
