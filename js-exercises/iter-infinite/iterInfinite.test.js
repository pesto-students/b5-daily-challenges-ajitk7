import { count, cycle, repeat } from './iterInfinite';

//! CHECK: How to write a test-case for checking an infinite loop?
describe('iterInfinite', () => {
  describe('count()', () => {

  });

  describe('cycle()', () => {
    it('Test Cycle', () => {
      const cycleIterator = cycle('ABCD', 2);
      const cycleResult = Array.from(cycleIterator);
      expect(cycleResult).toEqual(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
    });
  });

  describe('repeat()', () => {
    it('Test Repeat', () => {
      const repeatIterator = repeat(1, 10);
      const repeatResult = Array.from(repeatIterator);
      expect(repeatResult).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });
  });
});
