import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GifGridItem', () => {
  const title = 'Un título';
  const url = 'https://localhost/something.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show the component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should should have an image with the same url and alt from the props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have animate__zoomIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__zoomIn')).toBe(true);
  });
});
