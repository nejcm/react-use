import { renderHook } from '@testing-library/react-hooks';
import { useEffectAfterMount } from '../src';

describe('useEffectAfterMount', () => {
  const mockCallback = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should not call provided callback on mount', () => {
    renderHook(() => useEffectAfterMount(mockCallback));

    expect(mockCallback).toHaveBeenCalledTimes(0);
  });

  it('should call provided callback after mount / rerender', () => {
    let dep = 1;
    const { rerender } = renderHook(() => useEffectAfterMount(mockCallback, dep));
    expect(mockCallback).toHaveBeenCalledTimes(0);

    dep = 2;
    rerender();

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
