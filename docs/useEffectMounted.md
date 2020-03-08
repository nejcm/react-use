# `useEffectMounted`

Provides a check if the component is still mounted. Useful for side effects that happen after the component has unmounted.

## Usage

```typescript jsx
import React from 'react';
import { useEffectMounted } from 'react-use';

const Demo = () => {
  const [mounted, setMounted] = React.useState(true);

  const InnerComponent = () => {
    const [id, setId] = React.useState(1);

    const getData = React.useCallback(
      ({ getIsMounted }) => {
        setTimeout(() => {
          if (getIsMounted()) {
            // do something
            setId(id + 1);
            console.log('Mounted');
          } else {
            console.log('Unmounted');
          }
        }, 1000);
      },
      [id]
    );
    useEffectMounted(getData);

    return <p>Current id: {id}</p>;
  };

  return (
    <>
      <p>Open the developer console to see logs</p>
      {mounted && <InnerComponent />}
      <button onClick={setMounted.bind(null, false)}>Unmount</button>
    </>
  );
};
```

## Reference

```typescript
const mount: void = useEffectMounted();
```
