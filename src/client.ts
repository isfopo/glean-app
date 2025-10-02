import { createClient, createConfig } from 'glean-client/dist/client';

import { useAuthStore } from './store/auth';

const client = createClient(
  createConfig({
    auth: async () => {
      const { accessJwt } = useAuthStore.getState();
      return accessJwt ?? undefined;
    },
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  }),
);

export default client;
