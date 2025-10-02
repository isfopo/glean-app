import { OAuthClient, StateStore, SessionStore } from '@atproto/oauth-client';
import { SimpleStoreMemory } from '@atproto-labs/simple-store-memory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactNativeRuntimeImplementation } from './react-native-runtime';

// Custom StateStore using AsyncStorage
class AsyncStorageStateStore implements StateStore {
  async get(key: string): Promise<any> {
    const value = await AsyncStorage.getItem(`oauth_state:${key}`);
    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: any): Promise<void> {
    await AsyncStorage.setItem(`oauth_state:${key}`, JSON.stringify(value));
  }

  async del(key: string): Promise<void> {
    await AsyncStorage.removeItem(`oauth_state:${key}`);
  }
}

// Custom SessionStore using AsyncStorage
class AsyncStorageSessionStore implements SessionStore {
  async get(key: string): Promise<any> {
    const value = await AsyncStorage.getItem(`oauth_session:${key}`);
    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: any): Promise<void> {
    await AsyncStorage.setItem(`oauth_session:${key}`, JSON.stringify(value));
  }

  async del(key: string): Promise<void> {
    await AsyncStorage.removeItem(`oauth_session:${key}`);
  }
}

// Initialize the OAuth client with custom stores and runtime
export const oauthClient = new OAuthClient({
  clientMetadata: {
    client_id: process.env.BASE_URL, // Use loopback for development
    redirect_uris: ['gleanapp://oauth/callback'],
    scope: 'atproto',
  },
  responseMode: 'query',
  stateStore: new AsyncStorageStateStore(),
  sessionStore: new AsyncStorageSessionStore(),
  runtimeImplementation: new ReactNativeRuntimeImplementation(),
  // Use memory stores for caches as they don't need persistence
  didCache: new SimpleStoreMemory({ ttl: 60e3, max: 100 }),
  handleCache: new SimpleStoreMemory({ ttl: 60e3, max: 100 }),
  dpopNonceCache: new SimpleStoreMemory({ ttl: 60e3, max: 100 }),
  authorizationServerMetadataCache: new SimpleStoreMemory({
    ttl: 60e3,
    max: 100,
  }),
  protectedResourceMetadataCache: new SimpleStoreMemory({
    ttl: 60e3,
    max: 100,
  }),
  // Provide a handle resolver for React Native
  handleResolver: 'https://plc.directory',
});
