import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';
import client from '@/client';
import { Linking } from 'react-native';

export interface UserCredentials {
  handle: string;
}

type AuthState = {
  isLoading: boolean;
  isSignedIn: boolean;
  accessJwt: string | null;
  refreshJwt: string | null;
  handle: string | null;
  did: string | null;
  profile: string | null;
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  completeOAuth: (code: string) => Promise<void>;
  bootstrapAsync: () => Promise<void>;
};

export const useAuthStore = create<AuthState>(set => ({
  isLoading: true,
  isSignedIn: false,
  accessJwt: null,
  refreshJwt: null,
  handle: null,
  did: null,
  profile: null,
  signIn: async (data: UserCredentials) => {
    try {
      const { response } = await client.post({
        url: '/api/auth/login',
        body: {
          ...data,
        },
      });
      console.log(response);
      if (response.status > 400) {
        throw new Error('Sign In failed');
      }

      Linking.openURL(response.url);
    } catch (error) {
      console.error('Sign In failed:', error);
    }
  },
  signOut: async () => {
    await Keychain.resetGenericPassword();
    set({
      isSignedIn: false,
      accessJwt: null,
      refreshJwt: null,
      did: null,
      profile: null,
      handle: null,
    });
  },
  signUp: async (data: UserCredentials) => {
    try {
      throw new Error('Not implemented');
      // const response = await client.post({
      //   url: '/api/auth/createSession',
      //   body: {
      //     identifier: data.email,
      //     password: data.password,
      //   },
      // });

      // const { accessJwt, refreshJwt, did, profile, handle } =
      //   response.data as any;

      // await Keychain.setGenericPassword(data.email, data.password);

      // set({ isSignedIn: true, accessJwt, refreshJwt, did, profile, handle });
    } catch (error) {
      console.error('Sign Up failed:', error);
      // You might want to handle error states, e.g., set an error message in the store
    }
  },
  completeOAuth: async (code: string) => {
    try {
      const response = await client.post({
        url: '/api/auth/token',
        body: { code },
      });

      const { accessJwt, refreshJwt, did, profile, handle } =
        response.data as any;

      set({ isSignedIn: true, accessJwt, refreshJwt, did, profile, handle });
    } catch (error) {
      console.error('Complete OAuth failed:', error);
    }
  },
  bootstrapAsync: async () => {
    // let userToken;
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
      }
    } catch (e) {
      // Restoring token failed
    }
    set({ isLoading: false });
  },
}));
