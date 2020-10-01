import { 
    queries,
    mutations,
    subscriptions 
} from './todos'

export const resolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
  Subscription: {
    ...subscriptions,
  },
}
