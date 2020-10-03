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
  ) {
    todosChanged(filter: $filter) {
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
