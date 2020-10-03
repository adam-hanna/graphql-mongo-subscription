/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PriorityEnum = "high" | "low" | "medium" | "%future added value";
export type TodoFilterInput = {
    from?: string | null;
    to?: string | null;
    priority?: PriorityEnum | null;
    note?: string | null;
    done?: boolean | null;
    refetch?: boolean | null;
};
export type subscriptionSubscriptionVariables = {
    filter: TodoFilterInput;
};
export type subscriptionSubscriptionResponse = {
    readonly todosChanged: {
        readonly _id: string | null;
        readonly timestamp: string;
        readonly priority: PriorityEnum;
        readonly note: string;
        readonly done: boolean | null;
    };
};
export type subscriptionSubscription = {
    readonly response: subscriptionSubscriptionResponse;
    readonly variables: subscriptionSubscriptionVariables;
};



/*
subscription subscriptionSubscription(
  $filter: TodoFilterInput!
) {
  todosChanged(filter: $filter) {
    _id
    timestamp
    priority
    note
    done
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todosChanged",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "subscriptionSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "subscriptionSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "deecc8c04ce076c7b8bc2ed5512061f1",
    "id": null,
    "metadata": {},
    "name": "subscriptionSubscription",
    "operationKind": "subscription",
    "text": "subscription subscriptionSubscription(\n  $filter: TodoFilterInput!\n) {\n  todosChanged(filter: $filter) {\n    _id\n    timestamp\n    priority\n    note\n    done\n  }\n}\n"
  }
};
})();
(node as any).hash = '9d001d53329a1d56fa74e2488a7658b9';
export default node;
