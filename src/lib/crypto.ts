import { Buffer } from 'buffer';

export const encodeToBase64 = (str: string): string => {
  return Buffer.from(str, 'utf8').toString('base64');
};
