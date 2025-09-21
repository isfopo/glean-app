import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';

type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  bootstrapAsync: () => Promise<void>;
};

export const useAuthStore = create<AuthState>(set => ({
  isLoading: true,
  isSignout: false,
  userToken: null,
  signIn: async (data: any) => {
    const userToken = 'dummy-auth-token';
    await Keychain.setGenericPassword('userToken', userToken);
    set({ isSignout: false, userToken });
  },
  signOut: async () => {
    await Keychain.resetGenericPassword();
    set({ isSignout: true, userToken: null });
  },
  signUp: async (data: any) => {
    const userToken = 'dummy-auth-token';
    await Keychain.setGenericPassword('userToken', userToken);
    set({ isSignout: false, userToken });
  },
  bootstrapAsync: async () => {
    let userToken;
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        userToken = credentials.password;
      }
    } catch (e) {
      // Restoring token failed
    }
    set({ isLoading: false, userToken });
  },
}));
