export const fetchNews = async (searchTerm) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.API_KEY}`
  );
  const json = await res.json();
  return json.articles;
};
