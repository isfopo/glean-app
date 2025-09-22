import { createClient, createConfig } from 'glean-client/dist/client';

import { useAuthStore } from './store/auth';

const client = createClient(
  createConfig({
    auth: async () => {
      const { accessJwt } = useAuthStore.getState();
      return accessJwt ?? undefined;
    },
    baseUrl: 'http://localhost:3000',
  }),
);

export default client;
