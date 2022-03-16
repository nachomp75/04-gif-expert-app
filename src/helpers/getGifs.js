export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
    category
  )}&api_key=MhFm2lz9rtcsKwj72m94Gg2VtR0Dto2z`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  return gifs;
};
