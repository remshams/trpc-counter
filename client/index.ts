import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/index.js";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

console.log(await trpc.get.query());
console.log(await trpc.increase.mutate());
console.log(await trpc.get.query());
