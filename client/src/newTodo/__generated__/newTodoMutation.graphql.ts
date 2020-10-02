/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PriorityEnum = "high" | "low" | "medium" | "%future added value";
export type NewTodo = {
    priority: PriorityEnum;
    note: string;
};
export type newTodoMutationVariables = {
    todo: NewTodo;
};
export type newTodoMutationResponse = {
    readonly newTodo: {
        readonly _id: string | null;
    };
};
export type newTodoMutation = {
    readonly response: newTodoMutationResponse;
    readonly variables: newTodoMutationVariables;
};



/*
mutation newTodoMutation(
  $todo: NewTodo!
) {
  newTodo(todo: $todo) {
    _id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todo"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "todo",
        "variableName": "todo"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "newTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "newTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca96b1b91735daafa00e3f9145bb5cec",
    "id": null,
    "metadata": {},
    "name": "newTodoMutation",
    "operationKind": "mutation",
    "text": "mutation newTodoMutation(\n  $todo: NewTodo!\n) {\n  newTodo(todo: $todo) {\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a0e20e9d736a9465ae510678d0799705';
export default node;
