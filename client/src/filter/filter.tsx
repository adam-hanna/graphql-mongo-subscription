import React, { useState } from 'react'

export type Filters = {
  id?: string
  from?: Date
  to?: Date
  priority?: string
  note?: string
  done?: boolean
}

export type Props = {
  filters: Filters
  setFilters(filters: Filters): void
}

export const Filter = ({
  filters: {
    id,
    from,
    to,
    priority,
    note,
    done
  },
  setFilters,
}: Props) => {
  const [localIDFilter, setLocalIDFilter] = useState(id)
  const [localFromFilter, setLocalFromFilter] = useState(from)
  const [localToFilter, setLocalToFilter] = useState(to)
  const [localPriorityFilter, setLocalPriorityFilter] = useState(priority)
  const [localNoteFilter, setLocalNoteFilter] = useState(note)
  const [localDoneFilter, setLocalDoneFilter] = useState(done)

  return (
    <div>
      <h2>Filters</h2>
      <form 
        style={{ display: "flex", flexDirection: "column", margin: "5px" }}
        onChange={() => {
          setFilters({
            id: localIDFilter,
            from: localFromFilter,
            to: localToFilter,
            priority: localPriorityFilter,
            note: localNoteFilter,
            done: localDoneFilter,
          })
        }}
      >
        <label><strong>id:</strong><br />
          <input 
            type="text" 
            id="_id" 
            name="_id" 
            value={localIDFilter} 
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalIDFilter(undefined)
              } else {
                setLocalIDFilter(val)
              }
            }}
          />
        </label>
        <label><strong>from:</strong><br />
          <input 
            type="date" 
            id="from" 
            name="from" 
            value={localFromFilter?.toLocaleString()}
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalFromFilter(undefined)
              } else {
                setLocalFromFilter(new Date(val))
              }
            }}
          />
        </label>
        <label><strong>to:</strong><br />
          <input 
            type="date" 
            id="to" 
            name="to" 
            value={localToFilter?.toLocaleString()}
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalToFilter(undefined)
              } else {
                setLocalToFilter(new Date(val))
              }
            }}
          />
        </label>
        <label><strong>priority:</strong><br />
          <select 
            name="priority" 
            id="priority"
            value={localPriorityFilter}
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalPriorityFilter(undefined)
              } else {
                setLocalPriorityFilter(val)
              }
            }}
          >
            <option value="">-</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <label><strong>note:</strong><br />
          <input 
            type="text" 
            id="note" 
            name="note" 
            value={localNoteFilter}
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalNoteFilter(undefined)
              } else {
                setLocalNoteFilter(val)
              }
            }}
          />
        </label>
        <label><strong>done:</strong><br />
          <select 
            name="done" 
            id="done"
            value={typeof localDoneFilter != "undefined" ? String(localDoneFilter) : undefined}
            onChange={e => {
              const val = e.target.value
              if (!val) {
                setLocalDoneFilter(undefined)
              } else {
                setLocalDoneFilter(val.toUpperCase() === "TRUE" ? true : false)
              }
            }}
          >
            <option value="">-</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>

        <button 
          type="submit"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
