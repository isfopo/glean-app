import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtpSessionData } from '@atproto/api';
import { postApiAuthLogin } from '@/api';
import { encodeToBase64 } from '@/lib/crypto';
import client from '@/client';

export interface UserCredentials {
  handle: string;
  password: string;
}

type AuthState = {
  isSignedIn: boolean;
  session: AtpSessionData | null;
  profile: string | null;
  signIn: (data: UserCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isSignedIn: false,
      session: null,
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
          // Additional setup if needed
        } catch (error) {
          console.error('Sign In failed:', error);
          throw error;
        }
      },
      signOut: () => {
        set({
          isSignedIn: false,
          session: undefined,
          profile: null,
        });
      },
      signUp: async (_data: UserCredentials) => {
        try {
          throw new Error('Not implemented');
        } catch (error) {
          console.error('Sign Up failed:', error);
        }
      },
    }),
    {
      version: 1,
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        isSignedIn: state.isSignedIn,
        session: state.session,
        profile: state.profile,
      }),
    },
  ),
);
