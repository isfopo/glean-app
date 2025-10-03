import { createClient, createConfig } from './api/client';

import { useAuthStore } from './store/auth';

const client = createClient(
  createConfig({
    auth: async () => {
      const { session } = useAuthStore.getState();
      return session?.accessJwt ?? undefined;
    },
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  }),
);

export default client;
