import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { z } from "zod";
import { createCounterStore } from "./counter.js";
import { publicProcedure, router } from "./router.js";

const counterStore = createCounterStore();

export const appRouter = router({
  getCounter: publicProcedure.query(() => {
    return {
      counter: counterStore.get(),
    };
  }),
  setCounter: publicProcedure.input(z.number()).mutation((opts) => {
    counterStore.set(opts.input);
    return {
      count: counterStore.get(),
    };
  }),
  increasteCounter: publicProcedure.mutation(() => {
    return {
      count: counterStore.increase(),
    };
  }),
  decreaseCounter: publicProcedure.mutation(() => {
    return {
      count: counterStore.decrease(),
    };
  }),
  resetCounter: publicProcedure.mutation(() => {
    counterStore.reset();
    return {
      count: 0,
    };
  }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  middleware: cors(),
  router: appRouter,
}).listen(3000);
