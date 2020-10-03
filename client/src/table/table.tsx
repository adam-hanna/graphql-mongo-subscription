import React, { useState, useEffect } from 'react'
import { 
  QueryRenderer,
} from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'
import { 
  tableTodosQueryResponse,
  TodoFilterInput
} from './__generated__/tableTodosQuery.graphql'
import graphql from 'babel-plugin-relay/macro'
import {
  SelectorData,
  RecordSourceSelectorProxy,
} from 'relay-runtime';
import TodosSubscription from './subscription'

export type TodosType = {
  readonly _id: string | null;
  readonly timestamp: string;
  readonly priority: PriorityEnum;
  readonly note: string;
  readonly done: boolean | null;
}

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
  setOrderByCol(col: string): void
}

export const Table = ({
  setOrderByCol,
}: Props) => {
  console.log("table did change")
  const [filter, setFilter] = useState<TodoFilterInput>({})
  const skip = 0
  const limit = 10
  const orderBy = {
    orderByField: '_id',
    order: "desc",
  }

  const toggleRefetch = () => {
    console.log("filter", filter)
    let newFilter = { ...filter }
    newFilter["refetch"] = !newFilter["refetch"]
    console.log("new filter", newFilter)
    setFilter(newFilter)
  }

  useEffect(() => {
    console.log("filter did change", filter)
  }, [filter])

  useEffect(() => {
    TodosSubscription(
      // @ts-ignore
      response => console.log(`Received data: `, response),
      // @ts-ignore
      error => console.log(`An error occurred:`, error),
      () => console.log(`Completed`),
      (store: RecordSourceSelectorProxy, data: SelectorData) => {
        console.log('in updater')
        // note: cheating to cause the query to re-run
        toggleRefetch()
      }
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
          <TableBody
            filter={filter}
            skip={skip}
            limit={limit}
            orderBy={orderBy}
          />
        </tbody>
      </table>
    </div>
  )
}

type TableBodyProps = {
  filter: any;
  skip: number;
  limit: number;
  orderBy: {
    orderByField: string;
    order: string;
  };
}

const TableBody = ({
  filter,
  skip,
  limit,
  orderBy,
}: TableBodyProps) => {
  console.log("table body did change")
  const environment = useRelayEnvironment()

  return (
    <QueryRenderer
      fetchPolicy={"network-only"}
      environment={environment}
      query={graphql`
        query tableTodosQuery($filter: TodoFilterInput!, $skip: Int!, $limit: Int!, $orderBy: OrderByInput!) {
          todos(filter: $filter, skip: $skip, limit: $limit, orderBy: $orderBy) {
            _id
            timestamp
            priority
            note
            done
          }
        }
      `}
      variables={{
        filter,
        skip,
        limit,
        orderBy,
      }}
      render={({ error, props }) => {
        let todos: Todo[] = []

        if (error) {
          console.error(error)
          return
        } else if (props) {
          todos = (props as tableTodosQueryResponse).todos as Todo[]
        } else {
          return
        }
        console.log('todos', todos)

        return (
          <>
            {
              todos.map(({ _id, timestamp, priority, note, done }: Todo) => {
                return (
                  <tr key={_id}>
                    <td style={{ border: "1px solid black" }}>{ _id }</td>
                    <td style={{ border: "1px solid black" }}>{ timestamp }</td>
                    <td style={{ border: "1px solid black" }}>{ priority }</td>
                    <td style={{ border: "1px solid black" }}>{ note }</td>
                    <td style={{ border: "1px solid black" }}>{ String(done) }</td>
                  </tr>
                )
              })
            }
          </>
        )
      }}
    />
  )
}
