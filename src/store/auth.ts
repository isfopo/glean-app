import { create } from 'zustand';
import { AtpSessionData, BskyAgent } from '@atproto/api';
import { postApiAuthLogin } from '@/api';
import { encodeToBase64 } from '@/lib/crypto';
import client from '@/client';

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
  handle: string | null;
  did: string | null;
  profile: string | null;
  signIn: (data: UserCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  bootstrapAsync: () => Promise<void>;
};

export const useAuthStore = create<AuthState>(set => ({
  isLoading: true,
  isSignedIn: false,
  session: undefined,
  agent: getAgent(),
  handle: null,
  did: null,
  profile: null,
  signIn: async ({ handle, password }: UserCredentials) => {
    // Call login route in client
    const { data } = await postApiAuthLogin({
      client,
      headers: {
        Authorization: `Basic ${encodeToBase64(`${handle}:${password}`)}`,
        Accept: 'application/json',
      },
    });

    if (!data) {
      throw new Error('Invalid response');
    }

    set({
      isSignedIn: true,
      session: data.session as unknown as AtpSessionData,
    });

    try {
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
