/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PriorityEnum = "high" | "low" | "medium" | "%future added value";
export type SortEnum = "asc" | "desc" | "%future added value";
export type TodoFilterInput = {
    from?: string | null;
    to?: string | null;
    priority?: PriorityEnum | null;
    note?: string | null;
    done?: boolean | null;
    refetch?: boolean | null;
};
export type OrderByInput = {
    orderByField: string;
    order: SortEnum;
};
export type tableTodosQueryVariables = {
    filter: TodoFilterInput;
    skip: number;
    limit: number;
    orderBy: OrderByInput;
};
export type tableTodosQueryResponse = {
    readonly todos: ReadonlyArray<{
        readonly _id: string | null;
        readonly timestamp: string;
        readonly priority: PriorityEnum;
        readonly note: string;
        readonly done: boolean | null;
    }>;
};
export type tableTodosQuery = {
    readonly response: tableTodosQueryResponse;
    readonly variables: tableTodosQueryVariables;
};



/*
query tableTodosQuery(
  $filter: TodoFilterInput!
  $skip: Int!
  $limit: Int!
  $orderBy: OrderByInput!
) {
  todos(filter: $filter, skip: $skip, limit: $limit, orderBy: $orderBy) {
    _id
    timestamp
    priority
    note
    done
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "limit"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "orderBy"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      },
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      },
      {
        "kind": "Variable",
        "name": "orderBy",
        "variableName": "orderBy"
      },
      {
        "kind": "Variable",
        "name": "skip",
        "variableName": "skip"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "timestamp",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "priority",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "note",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "done",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "tableTodosQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "tableTodosQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "4ef32b8af638ad21087905a618938d1f",
    "id": null,
    "metadata": {},
    "name": "tableTodosQuery",
    "operationKind": "query",
    "text": "query tableTodosQuery(\n  $filter: TodoFilterInput!\n  $skip: Int!\n  $limit: Int!\n  $orderBy: OrderByInput!\n) {\n  todos(filter: $filter, skip: $skip, limit: $limit, orderBy: $orderBy) {\n    _id\n    timestamp\n    priority\n    note\n    done\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f3f906d97fe32ec540ad7030245bf334';
export default node;
