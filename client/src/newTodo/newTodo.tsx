import React, { useState } from 'react'
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'
import { useRelayEnvironment } from 'react-relay/hooks'
import {
  PriorityEnum,
} from '../table'

export type newTodo = {
  priority: PriorityEnum
  note: string
}

export type Props = {

}

const mutation = graphql`
  mutation newTodoMutation(
    $todo: NewTodo!
  ) {
    newTodo(todo: $todo) {
      _id
    }
  }
`;


// @ts-ignore
export const NewTodo = (props: Props) => {
  const environment = useRelayEnvironment()

  const [localPriority, setLocalPriority] = useState<PriorityEnum>(PriorityEnum.high)
  const [localNote, setLocalNote] = useState<string>("")

  const createNewTodo = (newTodo: newTodo) => {
    const variables = {
      todo: newTodo,
    };
  
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          console.log('Response received from server.', response, errors)

          setLocalPriority(PriorityEnum.high)
          setLocalNote("")
        },
        onError: err => console.error(err),
      },
    );
  }

  return (
    <div>
      <h2>Create New TODO</h2>
      <form
        style={{ display: "flex", flexDirection: "column", margin: "5px" }}
      >
        <label><strong>note:</strong><br />
          <input 
            type="text" 
            id="note" 
            name="note" 
            value={localNote}
            onChange={e => { setLocalNote(e.target.value) } }
          />
        </label>
        <label><strong>priority:</strong><br />
          <select 
            name="priority" 
            id="priority"
            value={localPriority}
            onChange={e => {
              setLocalPriority(e.target.value as PriorityEnum)
            }}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        
        <button 
          type="submit" 
          onClick={(e) => {
            e.preventDefault()

            createNewTodo({
              priority: localPriority,
              note: localNote,
            })
          }}
        >Submit</button>
      </form>
    </div>
  )
}
