import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/index.js";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

console.log(await trpc.getCounter.query());
console.log(await trpc.increasteCounter.mutate());
console.log(await trpc.setCounter.mutate(5));
console.log(await trpc.resetCounter.mutate());
console.log(await trpc.getCounter.query());
