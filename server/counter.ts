type Counter = number;

export type CounterStore = {
  get: () => Counter;
  set: (value: number) => void;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const createCounterStore = (): CounterStore => {
  let counter = 0;

  const get = () => counter;
  const set = (value: number) => {
    counter = value;
  };
  const increase = () => {
    return ++counter;
  };
  const decrease = () => {
    return --counter;
  };
  const reset = () => {
    counter = 0;
    return counter;
  };

  return {
    get,
    set,
    increase,
    decrease,
    reset,
  };
};
