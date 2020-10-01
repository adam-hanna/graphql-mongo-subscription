import {
  ChangeStreamOptions,
  ClientSession,
  Collection,
  Timestamp
} from 'mongodb';

function changeStreamToAsyncIterator(
  collection: Collection,
  pipeline: { query: { [key: string]: any }; skip: number; limit: number; order: { [key: string]: number } },
  options?: ChangeStreamOptions & {
    startAtOperationTime?: Timestamp;
    session?: ClientSession;
  }
): AsyncIterator<any> {
  const optionsArg = options || {};

  const changeStream = collection.watch([
    {
      $match: pipeline.query,
    }
  ], optionsArg);

  return {
    async next(): Promise<IteratorResult<any>> {
      if (changeStream.isClosed()) {
        if (changeStream.isClosed()) {
          return Promise.resolve({ value: undefined, done: true });
        }
        return changeStream
          .close()
          .then(() => ({ value: undefined, done: true }));
      }

      const data = await changeStream.stream().skip(pipeline.skip).limit(pipeline.limit).sort(pipeline.order).toArray();
      return { value: data, done: false };
    },
    return(): Promise<IteratorResult<any>> {
      if (changeStream.isClosed()) {
        return Promise.resolve({ value: undefined, done: true });
      }
      return changeStream
      .close()
      .then(() => ({ value: undefined, done: true }));
    },
    throw(error: Error): Promise<IteratorResult<any>> {
      if (!changeStream.isClosed()) {
        changeStream.close();
      }
      return Promise.reject({ value: error, done: true });
    }
  };
}

export default changeStreamToAsyncIterator;
