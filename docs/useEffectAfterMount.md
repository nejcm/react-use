# `useEffectAfterMount`

Uses the effect after the components has been mounted.

## Usage

```typescript jsx
import React from 'react';
import { useEffectAfterMount } from 'react-use';

const Demo = () => {
  const [runned, setRunned] = React.useState(false);
  const [change, setChange] = React.useState(false);

  const action = React.useCallback(() => {
    // do something
    console.log(change);
    setRunned(true);
  }, [change]);
  useEffectAfterMount(action);

  return (
    <>
      <div>{runned ? 'Runned' : 'Not Runned on mount'}</div>
      <button onClick={setChange.bind(null, true)}>Run</button>
    </>
  );
};
```

## Reference

```typescript
const mount: void = useEffectAfterMount();
```
