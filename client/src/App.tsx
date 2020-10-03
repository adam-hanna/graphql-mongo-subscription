import React, { useState } from 'react';
import {
  Table,
} from './table'
import {
  Filter,
  Filters,
} from './filter'
import {
  NewTodo,
} from './newTodo'

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
