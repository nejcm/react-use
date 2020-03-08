# `useFetch`

React Lifecycle hook for handling promises / fetching data.

## Usage

```jsx
import React from 'react';
import { useFetch } from 'react-use';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 3000);
});

const Demo = () => {
  const [result, error, state] = useFetch(promise);

  return (
    <>
      <div>{error && `Error: ${error}`}</div>
      <div>{state === useFetch.stateTypes.PENDING && 'Loading...'}</div>
      <div>{result && <p>{result}</p>}</div>
    </>
  );
};
```

## Reference

```typescript
const [result, error, state]: [any, string, string] = useFetch(promise: Promise<any>, defaultState: any);
```
