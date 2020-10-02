import {
  Environment,
  GraphQLResponse,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables
} from 'relay-runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const API_URL = process.env.API_URL || "http://localhost:8080/graphql"
const WS_URL = process.env.WS_URL || "ws://localhost:5000/graphql"

const subscriptionClient = new SubscriptionClient(WS_URL, {
  reconnect: true,
});

// @ts-ignore
const subscribe = (request, variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  });

  // Important: Convert subscriptions-transport-ws observable type to Relay's
  // @ts-ignore
  return Observable.from(subscribeObservable);
};

export const fetchQuery = async (request: RequestParameters, variables: Variables): Promise<GraphQLResponse> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: request.text,
      variables
    })
  })

  return res.json()
}

export const environment = new Environment({
  // @ts-ignore
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource())
})
