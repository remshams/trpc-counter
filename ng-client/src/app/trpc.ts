import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../../server/index';

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
