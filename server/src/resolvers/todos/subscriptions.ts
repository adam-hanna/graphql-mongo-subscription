import {
  todos,
} from '../../db'
import changeStreamToAsyncIterator from '../../pubsub'
//import changeStreamToAsyncIterator from 'change-stream-to-async-iterator'

export const subscriptions = {
  todosChanged: {
    // @ts-ignore
    subscribe: (parent, args, context, info): AsyncIterator<any> => {
      console.log('args', args)
      let query = {}

      return changeStreamToAsyncIterator(todos, [
        {
          $match: query,
        }
      ],
      {
        fullDocument : "updateLookup"
      })
    },
    // @ts-ignore
    resolve: payload => payload
  }
}
