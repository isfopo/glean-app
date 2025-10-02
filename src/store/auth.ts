import { create } from 'zustand';
import { AtpSessionData, BskyAgent } from '@atproto/api';

console.log('BskyAgent loaded');

const getAgent = (): BskyAgent => {
  return new BskyAgent({
    service: 'https://bsky.social/',
  });
};

export interface UserCredentials {
  handle: string;
  password: string;
}

type AuthState = {
  isLoading: boolean;
  isSignedIn: boolean;
  session: AtpSessionData | undefined;
  agent: BskyAgent;
  handle: string | null;
  did: string | null;
  profile: string | null;
  signIn: (data: UserCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  bootstrapAsync: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isLoading: true,
  isSignedIn: false,
  session: undefined,
  agent: getAgent(),
  handle: null,
  did: null,
  profile: null,
  signIn: async (data: UserCredentials) => {
    try {
      const agent = get().agent;
      await agent.login({ identifier: data.handle, password: data.password });
      set({
        isSignedIn: true,
        session: agent.session,
        did: agent.session?.did,
        handle: agent.session?.handle,
      });
    } catch (error) {
      console.error('Sign In failed:', error);
      throw error;
    }
  },
  signOut: async () => {
    set({
      isSignedIn: false,
      session: undefined,
      did: null,
      profile: null,
      handle: null,
    });
  },
  signUp: async (_data: UserCredentials) => {
    try {
      throw new Error('Not implemented');
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  },
  bootstrapAsync: async () => {
    set({ isLoading: false });
  },
}));
