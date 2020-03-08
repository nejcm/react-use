// Based on https://github.com/bsonntag/react-use-promise
import { useEffect, useReducer } from 'react';

enum States {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  RESOLVED = 'RESOLVED',
}
export interface FetchState {
  error: string;
  result: any;
  state: typeof States;
}
export type Action = {
  type: string;
  payload?: any;
};
export type State = any;
export interface R extends React.Reducer<any, Action> {}

const reducer: R = (state: State, action: Action): State => {
  switch (action.type) {
    case States.PENDING:
      return {
        error: undefined,
        result: undefined,
        state: States.PENDING,
      };

    case States.RESOLVED:
      return {
        error: undefined,
        result: action.payload,
        state: States.RESOLVED,
      };

    case States.REJECTED:
      return {
        error: action.payload,
        result: undefined,
        state: States.REJECTED,
      };
    default:
      return state;
  }
};

const useFetch = (
  functionOrPromise: Function | Promise<any>,
  defaultValue: State = undefined
): [any, string, string] => {
  const [{ error, result, state }, dispatch] = useReducer<R>(reducer, {
    error: undefined,
    result: defaultValue,
    state: States.PENDING,
  });

  useEffect(() => {
    const promise = typeof functionOrPromise === 'function' ? functionOrPromise() : functionOrPromise;

    if (!promise) {
      return;
    }

    let unmounted = false;

    dispatch({ type: States.PENDING });
    promise.then(
      (res: State) =>
        !unmounted &&
        dispatch({
          payload: res,
          type: States.RESOLVED,
        }),
      () =>
        !unmounted &&
        dispatch({
          payload: error,
          type: States.REJECTED,
        })
    );

    return () => {
      unmounted = true;
    };
  }, [defaultValue, functionOrPromise, error]);

  return [result, error, state];
};
useFetch.stateTypes = States;

export default useFetch;
