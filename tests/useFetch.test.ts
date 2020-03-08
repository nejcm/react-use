import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../src';

describe('useFetch', () => {
  const success = 'Success!';
  const mockCallback = jest.fn(
    () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(success);
        }, 50);
      })
  );

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should to have loading state and return result', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockCallback));

    let [response, error, state] = result.current;
    expect(response).toBeUndefined();
    expect(error).toBeUndefined();
    expect(state).toBe(useFetch.stateTypes.PENDING);

    await waitForNextUpdate();

    [response, error, state] = result.current;
    expect(response).toBe(success);
    expect(state).not.toBe(useFetch.stateTypes.PENDING);
  });
});

/*
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
*/
