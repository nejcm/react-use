import { renderHook } from '@testing-library/react-hooks';
import { useEffectMounted } from '../src';

describe('useEffectMounted', () => {
  const mockCallback = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call provided callback when mounted', () => {
    renderHook(() => useEffectMounted(mockCallback));

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should not call provided callback on unmount', () => {
    const { unmount, rerender } = renderHook(() => useEffectMounted(mockCallback));
    expect(mockCallback).toHaveBeenCalledTimes(1);

    unmount();
    rerender();

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
