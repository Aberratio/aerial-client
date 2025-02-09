import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '2014irm0',
  dataset: 'production',
  apiVersion: '2023-07-16',
  useCdn: false,
};

const client = createClient(config);

export default client;
