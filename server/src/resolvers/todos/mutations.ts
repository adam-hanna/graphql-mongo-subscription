import {
  todos,
} from '../../db'

export enum PriorityEnum {
  high = "high",
  medium = "medium",
  low = "low"
}

export type Todo = {
  _id: string;
  timestamp: string;
  priority: PriorityEnum;
  note: string;
  done: boolean;
}

export type NewTodo = {
  priority: PriorityEnum
  note: string
}

export const newTodo = async ({ todo }: { todo: NewTodo }): Promise<Todo> => {
  console.log("new todo", todo)
  const timestamp = new Date()
  const { insertedId } = await todos.insertOne({
    timestamp,
    done: false,
    ...todo,
  })

  return {
    _id: insertedId.toHexString(),
    timestamp: timestamp.toLocaleString(),
    done: false,
    ...todo,
  }
}

export const modifyDone = async (id: String, done: Boolean): Promise<Todo | undefined> => {
  const { upsertedId: { _id } } = await todos.updateOne({
    _id: id,
  },{
    $set: { done }
  })
  const todo = await todos.findOne({ _id })

  return todo
}

export const mutations = {
  newTodo,
  modifyDone,
}
