import { getGifs } from '../../helpers/getGifs';

describe('Testing getGifs Fetch', () => {
  test('should bring 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should not bring elements when you do not give a category', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
