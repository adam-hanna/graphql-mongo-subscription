import graphql from 'babel-plugin-relay/macro'
import {
  requestSubscription,
} from 'react-relay';
import {
  environment,
} from '../contexts/relay';

const subscription = graphql`
  subscription subscriptionSubscription(
    $filter: TodoFilterInput!
    $skip: Int!
    $limit: Int!
    $orderBy: OrderByInput!
  ) {
    todos(filter: $filter, skip: $skip, limit: $limit, orderBy: $orderBy) {
      _id
      timestamp
      priority
      note
      done
    }
  }
`;

// TODO
const variables = {
  filter: {},
  skip: 0,
  limit: 10,
  orderBy: {
    orderByField: "_id",
    order: "desc",
  },
};

// @ts-ignore
export default (onNext, onError, onCompleted, updater) => {
  const subscriptionConfig = {
    subscription,
    variables,
    onError,
    onNext,
    onCompleted,
    updater
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )
}
