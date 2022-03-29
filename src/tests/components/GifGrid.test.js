import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid', () => {
  const category = 'Will Smith slap';

  test('should show the component correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images are loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: '123',
        url: 'https://localhost:3000/testing/test1.jpg',
        title: 'Mega test 1',
      },
      {
        id: '456',
        url: 'https://localhost:3000/testing/test2.jpg',
        title: 'Mega test 2',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
