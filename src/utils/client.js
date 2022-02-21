import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: 'textnuxtblog',
  apiKey: process.env.API_KEY,
});