import { createSignal } from "solid-js";
import "./Counter.css";
import { trpc } from "~/trpc";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  const increment = async () => {
    const result = await trpc.increasteCounter.mutate();
    setCount(result.count ?? 0);
  };

  return (
    <button class="increment" onClick={increment} type="button">
      Clicks: {count()}
    </button>
  );
}
