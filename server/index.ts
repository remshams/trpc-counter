import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { createCounterStore } from "./counter.js";
import { publicProcedure, router } from "./router.js";

const counterStore = createCounterStore();

export const appRouter = router({
  get: publicProcedure.query(() => {
    return {
      counter: counterStore.get(),
    };
  }),
  increase: publicProcedure.mutation(() => {
    return {
      count: counterStore.increase(),
    };
  }),
  decrease: publicProcedure.mutation(() => {
    return {
      count: counterStore.decrease(),
    };
  }),
  reset: publicProcedure.mutation(() => {
    counterStore.reset();
    return {
      count: 0,
    };
  }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  router: appRouter,
}).listen(3000);
