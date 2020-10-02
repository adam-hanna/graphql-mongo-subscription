import React, { useState } from 'react';
import {
  PriorityEnum,
  Table,
  Todo,
} from './table'
import {
  Filter,
  Filters,
} from './filter'
import {
  NewTodo,
} from './newTodo'

const fakeTodos: Todo[] = [
  {
    _id: "3",
    timestamp: (new Date()).toLocaleString(),
    priority: PriorityEnum.high,
    note: "foo",
    done: false,
  },
  {
    _id: "2",
    timestamp: (new Date((new Date()).setDate((new Date()).getDate()-1))).toLocaleString(),
    priority: PriorityEnum.medium,
    note: "bar",
    done: false,
  },
  {
    _id: "1",
    timestamp: (new Date((new Date()).setDate((new Date()).getDate()-2))).toLocaleString(),
    priority: PriorityEnum.low,
    note: "baz",
    done: true,
  },
]

function App() {
  const [orderBy, setOrderBy] = useState("_id")
  const [orderDir, setOrderDir] = useState(-1)
  const [filters, setFilters] = useState<Filters>({})

  const orderByCol = (col: string): void => {
    if (col.toUpperCase() === orderBy) {
      setOrderDir(orderDir * -1)
    } else {
      setOrderBy(col)
      setOrderDir(-1)
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "5px" }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Table 
          todos={fakeTodos}
          setOrderByCol={orderByCol}
        />
        <Filter 
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <NewTodo />
    </div>
  );
}

export default App;
