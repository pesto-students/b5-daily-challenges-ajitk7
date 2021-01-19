function* count(start, step = 1) {
  let from = start;
  while (true) {
    yield from;
    from += step;
  }
}

function* cycle(iter, n) {
  let itreationCount = n;
  if (itreationCount === undefined) {
    while (true) {
      for (const character of iter) {
        yield character;
      }
    }
  } else {
    while (itreationCount > 0) {
      for (const character of iter) {
        yield character;
      }
      itreationCount -= 1;
    }
  }
}

function* repeat(value, n = Infinity) {
  let itreationCount = n;
  while (itreationCount > 0) {
    yield value;
    itreationCount -= 1;
  }
}

export { count, cycle, repeat };
