import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: 'next-blog1',
  apiKey: process.env.API_KEY,
});