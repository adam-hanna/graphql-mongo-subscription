import React, { useEffect } from 'react'
import TodosSubscription from './subscription'

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

export type Props = {
  todos: Todo[]
  setOrderByCol(col: string): void
}

export const Table = ({
  todos,
  setOrderByCol,
}: Props) => {
  useEffect(() => {
    TodosSubscription(
      // @ts-ignore
      response => console.log(`Received data: `, response),
      // @ts-ignore
      error => console.log(`An error occurred:`, error),
      () => console.log(`Completed`),
      () => {}
    )
  }, [])

  return (
    <div>
      <h2>TODOs</h2>
      <table style={{ margin: "5px", textAlign: "center", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }} onClick={() => { setOrderByCol("_id") }}>id</th>
            <th style={{ border: "1px solid black" }} onClick={() => { setOrderByCol("timestamp") }}>Timestamp</th>
            <th style={{ border: "1px solid black" }} onClick={() => { setOrderByCol("priority") }}>Priority</th>
            <th style={{ border: "1px solid black" }} onClick={() => { setOrderByCol("note") }}>Note</th>
            <th style={{ border: "1px solid black" }} onClick={() => { setOrderByCol("done") }}>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ _id, timestamp, priority, note, done }: Todo) => (
            <tr key={_id}>
              <td style={{ border: "1px solid black" }}>{ _id }</td>
              <td style={{ border: "1px solid black" }}>{ timestamp }</td>
              <td style={{ border: "1px solid black" }}>{ priority }</td>
              <td style={{ border: "1px solid black" }}>{ note }</td>
              <td style={{ border: "1px solid black" }}>{ String(done) }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
