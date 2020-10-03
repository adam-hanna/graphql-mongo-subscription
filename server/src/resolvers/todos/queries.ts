import {
  todos as todosCollection,
} from '../../db'

type Todo = {
  _id: string
  timestamp: string
  priority: PriorityEnum
  note: string
  done: boolean
}

enum PriorityEnum {
  high = "high",
  medium = "medium",
  low = "low"
}

enum SortEnum {
  asc = "ASC",
  desc = "DESC"
}

export type Filter = {
  from: string
  to: string
  priority: PriorityEnum
  note: string
  done: boolean
}

const todos = async ({
  filter,
  skip,
  limit,
  orderBy: {
    orderByField,
    order,
  },
}: {
  filter: Filter;
  skip: number;
  limit: number;
  orderBy: {
    orderByField: string;
    order: SortEnum
  }
}): Promise<Todo[]> => {
  console.log("filter in todos", filter)
  let query = {}

  let sort = { [orderByField]: order === SortEnum.asc ? 1 : -1 }

  return todosCollection.find(query).skip(skip).limit(limit).sort(sort).toArray()
}

export const queries = {
  todos,
}
