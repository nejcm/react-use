import { useEffect, useRef } from 'react';

const useEffectAfterMount = (callback: Function, deps: any = undefined): void => {
  const justMounted = useRef<Boolean>(true);
  useEffect(() => {
    if (!justMounted.current) {
      return callback();
    }
    justMounted.current = false;
  }, [callback, deps]);
};

export default useEffectAfterMount;
