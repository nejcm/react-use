# `usePrefetch`

Prefetches the imported file.

## Usage

```typescript jsx
import React from 'react';
import { usePrefetch } from 'react-use';
const importedComponent = () => import('../src/comps/Mock');

const Demo = () => {
  const [isShown, setIsShown] = React.useState(false);
  const Mock = usePrefetch(importedComponent);

  return (
    <div>
      <button onClick={() => setIsShown(true)}>Show</button>
      <React.Suspense fallback={<h1>Waiting for...</h1>}>{isShown && <Mock />}</React.Suspense>
    </div>
  );
};
```

## Reference

```typescript
const component: React.Component = usePrefetch();
```
