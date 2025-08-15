/*
Q53. How do you implement a custom iterable with [Symbol.iterator]?

Solution (concise):
- Define [Symbol.iterator]() that returns an iterator with next() → { value, done }.
*/

const rangeIterable = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        if (current <= end) return { value: current++, done: false };
        return { value: undefined, done: true };
      },
    };
  },
};

const listed = [...rangeIterable];

module.exports = { rangeIterable, listed };

