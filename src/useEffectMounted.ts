import { useEffect, useRef } from 'react';

const useEffectMounted = (callback: Function): void => {
  const isMounted = useRef<Boolean>(true);

  const getIsMounted = () => {
    return isMounted.current;
  };

  useEffect(() => {
    callback({ getIsMounted });
  }, [callback]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
};

export default useEffectMounted;
