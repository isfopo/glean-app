import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageStore {
  async get(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      return null;
    }
  }

  async set(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch {
      // Handle error if needed
    }
  }

  async del(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch {
      // Handle error if needed
    }
  }
}
