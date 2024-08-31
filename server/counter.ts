type Counter = number;

export type CounterStore = {
  get(): Counter;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const createCounterStore = (): CounterStore => {
  let counter = 0;

  const get = () => counter;
  const increase = () => {
    return counter++;
  };
  const decrease = () => {
    counter--;
    return counter;
  };
  const reset = () => {
    counter = 0;
    return counter;
  };

  return {
    get,
    increase,
    decrease,
    reset,
  };
};
