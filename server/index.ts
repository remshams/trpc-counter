import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { createCounterStore } from "./counter";
import { publicProcedure, router } from "./router";

const counterStore = createCounterStore();

const appRouter = router({
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

createHTTPServer({
  router: appRouter,
}).listen(3000);
