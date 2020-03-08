import { renderHook } from '@testing-library/react-hooks';
import { usePrefetch } from '../src';

describe('usePrefetch', () => {
  const mockImport = jest.fn(() => import('../src/comps/Mock'));

  it('should have called import and load the component', () => {
    const { result } = renderHook(() => usePrefetch(mockImport));
    expect(mockImport).toHaveBeenCalledTimes(1);
    expect(result.current).toBeDefined();
  });
});
