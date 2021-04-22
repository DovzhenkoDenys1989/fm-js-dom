function makeCounter() {
  let count = 0;
  /* return function counter() {
    return ++count;
  }*/
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
