import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { execSchema } from '../../../data';

// Create WebSocket listener server
export const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

export const subscriptionServer = SubscriptionServer.create(
  {
    schema: execSchema,
    execute,
    subscribe,
  },
  {
    server: websocketServer,
    path: '/graphql',
  },
);
