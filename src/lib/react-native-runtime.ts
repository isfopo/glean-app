import { RuntimeImplementation } from '@atproto/oauth-client';
import * as crypto from 'react-native-quick-crypto';

// Custom RuntimeImplementation for React Native using react-native-quick-crypto
export class ReactNativeRuntimeImplementation implements RuntimeImplementation {
  async createKey(algs: string[]): Promise<any> {
    // Use react-native-quick-crypto for key generation
    const cryptoImpl = crypto as any; // Type assertion for compatibility
    if (cryptoImpl.subtle) {
      const algorithm = algs.includes('ES256') ? 'ES256' : 'RS256';
      const keyPair = await cryptoImpl.subtle.generateKey(
        {
          name: algorithm === 'ES256' ? 'ECDSA' : 'RSASSA-PKCS1-v1_5',
          hash: 'SHA-256',
        },
        true,
        ['sign', 'verify'],
      );
      return keyPair;
    }
    throw new Error('Crypto not available for key generation');
  }

  getRandomValues(length: number): Uint8Array {
    const cryptoImpl = crypto as any; // Type assertion for compatibility
    if (cryptoImpl.getRandomValues) {
      const array = new Uint8Array(length);
      cryptoImpl.getRandomValues(array);
      return array;
    }
    throw new Error('Crypto not available for random values');
  }

  async digest(
    data: Uint8Array,
    alg: { name: 'sha256' | 'sha384' | 'sha512' },
  ): Promise<Uint8Array> {
    const cryptoImpl = crypto as any; // Type assertion for compatibility
    if (cryptoImpl.subtle) {
      const algorithm = alg.name.toUpperCase().replace('SHA', 'SHA-');
      const result = await cryptoImpl.subtle.digest(algorithm, data);
      return new Uint8Array(result);
    }
    throw new Error('Crypto not available for digest');
  }
}
