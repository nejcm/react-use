import React, { lazy, useEffect, useState } from 'react';

type Output = React.LazyExoticComponent<React.ComponentType<any>>;

// usePrefetch hook
const usePrefetch = (factory: () => Promise<any>): Output | null => {
  const [component, setComponent] = useState<Output | null>(null);
  useEffect(() => {
    const comp = lazy(factory);
    factory();
    setComponent(comp);
  }, [factory]);

  return component;
};

export default usePrefetch;
