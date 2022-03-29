import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing useFetchGifs', () => {
  test('should return init state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Will Smith slap')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an images array', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Will Smith slap')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
