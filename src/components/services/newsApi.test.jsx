import { fetchNews } from './newsApi';

describe.skip('News API', () => {
  it('fetches articles about seals', async () => {
    const searchTerm = 'seals';

    const output = await fetchNews(searchTerm);

    expect(output.length).toBeGreaterThan(2);
  });
});
